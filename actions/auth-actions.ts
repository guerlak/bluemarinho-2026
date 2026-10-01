'use server';

import bcrypt from 'bcryptjs';
import { redirect } from 'next/navigation';
import { query } from '@/lib/db';
import { createSession, deleteSession } from '@/lib/auth';

export interface ActionState {
  error?: string;
  success?: boolean;
}

export async function loginAction(
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    return { error: 'Preencha todos os campos.' };
  }

  try {
    // 1. Busca o usuário no banco
    const { rows } = await query('SELECT id, email, password_hash FROM users WHERE email = $1', [
      email.toLowerCase().trim(),
    ]);

    if (rows.length === 0) {
      return { error: 'E-mail ou senha inválidos.' };
    }

    const user = rows[0];

    // 2. Compara a senha digitada com o hash salvo no banco
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);

    if (!isPasswordValid) {
      return { error: 'E-mail ou senha inválidos.' };
    }

    // 3. Cria a sessão com cookie seguro
    await createSession(user.id, user.email);
  } catch (error) {
    console.error('Erro no login:', error);
    return { error: 'Ocorreu um erro interno. Tente novamente.' };
  }

  // 4. Redireciona para o painel administrativo
  redirect('/admin');
}

/**
 * Faz o logout e remove o cookie
 */
export async function logoutAction() {
  await deleteSession();
  redirect('/admin/login');
}
