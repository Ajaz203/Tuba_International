import { Routes } from '@angular/router';
import { router } from './shared/routes/routes';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home/hotel/classic',
        pathMatch: 'full'
      },
      {
        path: '',
        children: router
      }
];
