import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

/**
 * Next.js 16+ Proxy
 * Substitui o antigo middleware.ts
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get('admin_session')?.value;

  // Verifica se há token e se a assinatura JWT é válida
  const session = sessionCookie ? await decrypt(sessionCookie) : null;

  const isLoginPage = pathname === '/admin/login';
  const isAdminRoute = pathname.startsWith('/admin');

  // 1. Bloqueia acesso a rotas /admin se não estiver autenticado
  if (isAdminRoute && !isLoginPage && !session) {
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Se já estiver autenticado e tentar acessar /admin/login, manda para o painel
  if (isLoginPage && session) {
    const adminUrl = new URL('/admin', request.url);
    return NextResponse.redirect(adminUrl);
  }

  return NextResponse.next();
}

// Intercepta apenas as rotas do painel administrativo
export const config = {
  matcher: ['/admin/:path*'],
};
