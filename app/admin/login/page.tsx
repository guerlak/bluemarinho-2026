'use client';

import { useActionState } from 'react';
import { loginAction } from '@/actions/auth-actions';
import Link from 'next/link';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4 text-white">
      <div className="w-full max-w-md rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 shadow-2xl backdrop-blur-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Blue Marinho <span className="text-blue-500">Admin</span>
          </h1>
          <p className="mt-2 text-sm text-neutral-400">
            Acesso restrito para gestão de shows da banda
          </p>
        </div>

        {state?.error && (
          <div className="mb-6 rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-sm text-red-400">
            {state.error}
          </div>
        )}

        <form action={formAction} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="admin@bluemarinho.com.br"
              className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-white placeholder-neutral-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Senha
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-white placeholder-neutral-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-50"
          >
            {isPending ? 'Entrando...' : 'Entrar no Painel'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-xs text-neutral-500 hover:text-neutral-300 transition">
            ← Voltar para o site público
          </Link>
        </div>
      </div>
    </div>
  );
}
