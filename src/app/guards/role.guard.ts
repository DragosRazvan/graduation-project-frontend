import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['role'];
  const actualRole = auth.getUserRole();

  if (auth.isLoggedIn() && actualRole === expectedRole) {
    return true;
  }

  router.navigate(['/unauthorized']);
  return false;
};
