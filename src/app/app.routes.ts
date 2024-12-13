import { Routes } from '@angular/router';
import { router } from './shared/routes/routes';
import { ApplyVisaComponent } from './components/visa/apply-visa/apply-visa.component';
import { InstantVisaComponent } from './components/visa/instant-visa/instant-visa.component';
import { ForgotPasswordComponent } from './components/pages/other-pages/forgot-password/forgot-password.component';
import { LogInComponent } from './components/pages/other-pages/log-in/log-in.component';
import { UserDashboardComponent } from './components/pages/other-pages/user-dashboard/user-dashboard.component';

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
      },
      {
        path:'forgot-password',
        component:ForgotPasswordComponent
      },
      {
        path:'log-in',
        component:LogInComponent
      },
      {
        path:'user-dashboard',
        component:UserDashboardComponent
      },
     

];
