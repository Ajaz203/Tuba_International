import { Routes } from '@angular/router';
import { router } from './shared/routes/routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home/flight/modern',
        pathMatch: 'full'
      },
      {
        path: '',
        children: router
      }
];
