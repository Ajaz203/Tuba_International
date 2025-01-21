import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if the user is logged in and if they have the correct role (admin)
  if (authService.isLoggedIn() && authService.getLoggedInEmail()) {
    console.log('Is logged in:', authService.isLoggedIn());
console.log('Logged-in email:', authService.getLoggedInEmail());

    return true; // Allow access
  }

  // Redirect to the login page if not authorized
  router.navigate(['/Admin-login'], { queryParams: { returnUrl: state.url } });
  return false;

};
  // New user-dashboard guard
export const authGuardForUserDashboard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    console.log('User is logged in for dashboard access');
    return true; // Allow access to the user-dashboard
  }

  // Redirect to login page if not logged in
  router.navigate(['/log-in'], { queryParams: { returnUrl: state.url } });
  return false;
};

