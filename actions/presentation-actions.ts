'use server';

import { revalidatePath } from 'next/cache';
import { query } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { Presentation } from '@/lib/types';

export interface PresentationActionState {
  error?: string;
  success?: boolean;
}

export async function getPresentations(): Promise<Presentation[]> {
  try {
    const { rows } = await query(`
      SELECT 
        p.id,
        p.venue_id,
        p.day,
        p.month,
        p.year,
        p.time,
        v.name AS venue,
        v.location AS location,
        v."socialLink" AS "socialLink"
      FROM presentations p
      INNER JOIN venues v ON p.venue_id = v.id
      ORDER BY p.id ASC
    `);

    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    return [];

  }
}

/**
 * Insere um novo show no banco de dados
 */
export async function createPresentationAction(
  prevState: PresentationActionState | null,
  formData: FormData
): Promise<PresentationActionState> {
  // 1. Garante que só quem está autenticado pode criar
  const session = await getSession();
  if (!session) {
    return { error: 'Não autorizado. Faça login novamente.' };
  }

  // 2. Coleta os campos do formulário
  const venueId = Number(formData.get('venue_id'));
  const day = (formData.get('day') as string)?.trim();
  const month = (formData.get('month') as string)?.trim().toUpperCase();
  const year = (formData.get('year') as string)?.trim();
  const time = (formData.get('time') as string)?.trim();

  if (!venueId || !day || !month || !year || !time) {
    return { error: 'Por favor, selecione a casa de show e preencha todos os campos da data.' };
  }

  try {
    // 3. Salva a apresentação com a chave estrangeira (venue_id)
    await query(
      `INSERT INTO presentations (venue_id, day, month, year, time)
       VALUES ($1, $2, $3, $4, $5)`,
      [venueId, day, month, year, time]
    );

    // 4. Invalida o cache
    revalidatePath('/');
    revalidatePath('/admin');

    return { success: true };
  } catch (error) {
    console.error('Erro ao criar apresentação:', error);
    return { error: 'Falha ao salvar a apresentação no banco.' };
  }
}


/**
 * Remove um show pelo ID
 */
export async function deletePresentationAction(id: number) {
  // 1. Garante autenticação
  const session = await getSession();
  if (!session) {
    throw new Error('Não autorizado');
  }

  try {
    await query('DELETE FROM presentations WHERE id = $1', [id]);

    // 2. Invalida o cache
    revalidatePath('/');
    revalidatePath('/admin');
  } catch (error) {
    console.error('Erro ao deletar apresentação:', error);
    throw new Error('Falha ao excluir apresentação');
  }
}
