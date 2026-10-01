import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

// Chave secreta convertida em bytes para a biblioteca jose
const SECRET_KEY = new TextEncoder().encode(
  process.env.AUTH_SECRET || 'fallback-secret-key-change-me'
);

const COOKIE_NAME = 'admin_session';

// Formato dos dados que guardamos dentro do token
export interface SessionPayload {
  userId: number;
  email: string;
  expiresAt: Date;
}

/**
 * 1. Criptografa e assina o token JWT
 */
export async function encrypt(payload: SessionPayload): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d') // Validade de 7 dias
    .sign(SECRET_KEY);
}

/**
 * 2. Valida a assinatura do token e retorna os dados
 */
export async function decrypt(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY, {
      algorithms: ['HS256'],
    });
    return payload as unknown as SessionPayload;
  } catch (error) {
    // Se o token for inválido, adulterado ou expirado
    return null;
  }
}

/**
 * 3. Cria a sessão: gera o token e grava no Cookie HTTP-Only
 */
export async function createSession(userId: number, email: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 dias
  const sessionToken = await encrypt({ userId, email, expiresAt });

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    expires: expiresAt,
    path: '/',
  });
}

/**
 * 4. Obtém e valida a sessão atual a partir dos cookies
 */
export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(COOKIE_NAME)?.value;

  if (!sessionCookie) return null;

  return await decrypt(sessionCookie);
}

/**
 * 5. Destrói a sessão (Logout)
 */
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
