import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

// PublicGuard is the opposite of AuthenticatedGuard
// It allows access to the route if the user is not authenticated
// It redirects to the dashboard if the user is authenticated

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject( AuthService );
  const router = inject( Router );

  if (authService.authStatus() === AuthStatus.authenticated) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};
