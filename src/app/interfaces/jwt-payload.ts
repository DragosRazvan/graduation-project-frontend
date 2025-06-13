import { jwtDecode } from 'jwt-decode';

export interface JwtPayload {
  sub: string;
  email?: string;
  role?: string; // depends on how your backend sets this
  [key: string]: any; // for other custom claims
}

function getRoleFromToken(): string | null{
  const token = localStorage.getItem('token'); // or sessionStorage, depending on where you store it
  if (!token) return null;

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded.role ?? null;
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
}
