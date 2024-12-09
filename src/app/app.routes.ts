import { Routes } from '@angular/router';
import { router } from './shared/routes/routes';
import { ApplyVisaComponent } from './components/visa/apply-visa/apply-visa.component';
import { InstantVisaComponent } from './components/visa/instant-visa/instant-visa.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home/mix-demo/classic',
        pathMatch: 'full'
      },
      {
        path: '',
        children: router
      },
      {
        path:'apply-visa',
        component:ApplyVisaComponent
      },
      {
        path:'instant-visa',
        component:InstantVisaComponent
      }
     

];
