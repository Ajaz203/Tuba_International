import { Routes } from '@angular/router';
import { AboutUs1Component } from './about-us-1/about-us-1.component';
import { AboutUs2Component } from './about-us-2/about-us-2.component';
import { ComingSoon1Component } from './coming-soon-1/coming-soon-1.component';
import { ComingSoon2Component } from './coming-soon-2/coming-soon-2.component';
import { ComingSoon3Component } from './coming-soon-3/coming-soon-3.component';
import { ContactUs1Component } from './contact-us-1/contact-us-1.component';
import { ContactUs2Component } from './contact-us-2/contact-us-2.component';
import { ContactUs3Component } from './contact-us-3/contact-us-3.component';
import { ErrorPage404Component } from './error-page-404/error-page-404.component';
import { FaqComponent } from './faq/faq.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

export default [
  {
    path: 'about-us-1',
    component: AboutUs1Component
  },
  {
    path: 'about-us-2',
    component: AboutUs2Component
  },
  {
    path: 'contact-us-1',
    component: ContactUs1Component
  },
  {
    path: 'contact-us-2',
    component: ContactUs2Component
  },
  {
    path: 'contact-us-3',
    component: ContactUs3Component
  },
  {
    path: 'coming-soon-1',
    component: ComingSoon1Component
  },
  {
    path: 'coming-soon-2',
    component: ComingSoon2Component
  },
  {
    path: 'coming-soon-3',
    component: ComingSoon3Component
  },
  {
    path: '404',
    component: ErrorPage404Component
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent
  }
] as Routes;

