import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get('admin_session')?.value;

  // Verifica se o token é válido
  const session = sessionCookie ? await decrypt(sessionCookie) : null;

  const isLoginPage = pathname === '/admin/login';
  const isAdminRoute = pathname.startsWith('/admin');

  // 1. Se estiver tentando acessar o painel admin sem sessão válida, redireciona para login
  if (isAdminRoute && !isLoginPage && !session) {
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 2. Se já estiver logado e tentar abrir a tela de login, redireciona para o painel
  if (isLoginPage && session) {
    const adminUrl = new URL('/admin', request.url);
    return NextResponse.redirect(adminUrl);
  }

  return NextResponse.next();
}

// Configura o middleware para rodar apenas nas rotas /admin
export const config = {
  matcher: ['/admin/:path*'],
};
