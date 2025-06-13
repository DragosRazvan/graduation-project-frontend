import { Injectable } from '@angular/core';
import { jwtDecode }from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getDecodedToken(): any {
    const token = this.getToken();
    return token ? jwtDecode(token) : null;
  }

  getUserRole(): string | null {
    const decoded = this.getDecodedToken();
    if (!decoded) return null;

    const role = decoded['role'];
    return Array.isArray(role) ? role[0] : role;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
