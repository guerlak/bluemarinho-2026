'use server';

import { revalidatePath } from 'next/cache';
import { query } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { Venue } from '@/lib/types';

export interface VenueActionState {
  error?: string;
  success?: boolean;
}

/**
 * Busca todas as casas de show salvas no banco
 */
export async function getVenues(): Promise<Venue[]> {
  try {
    const { rows } = await query(
      'SELECT id, name, location, "socialLink" FROM venues ORDER BY name ASC'
    );
    return rows;
  } catch (error) {
    console.error('Erro ao buscar venues:', error);
    return [];
  }
}

/**
 * Cadastra uma nova casa de show no banco
 */
export async function createVenueAction(
  prevState: VenueActionState | null,
  formData: FormData
): Promise<VenueActionState> {
  const session = await getSession();
  if (!session) {
    return { error: 'Não autorizado. Faça login novamente.' };
  }

  const name = (formData.get('name') as string)?.trim().toUpperCase();
  const location = (formData.get('location') as string)?.trim();
  const socialLink = (formData.get('socialLink') as string)?.trim() || '';

  if (!name || !location) {
    return { error: 'Nome da casa e Bairro/Cidade são obrigatórios.' };
  }

  try {
    await query(
      `INSERT INTO venues (name, location, "socialLink")
       VALUES ($1, $2, $3)`,
      [name, location, socialLink]
    );

    // Revalida o admin para a nova casa aparecer imediatamente no select
    revalidatePath('/admin');
    return { success: true };
  } catch (error: any) {
    console.error('Erro ao criar venue:', error);
    if (error?.code === '23505') {
      return { error: 'Já existe uma casa de show cadastrada com esse nome.' };
    }
    return { error: 'Erro ao cadastrar a casa de show no banco.' };
  }
}
