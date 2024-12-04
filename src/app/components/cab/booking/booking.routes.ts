import { Routes } from '@angular/router';
import { CabBookingFailedComponent } from './cab-booking-failed/cab-booking-failed.component';
import { CabBookingPaymentComponent } from './cab-booking-payment/cab-booking-payment.component';
import { CabBookingSuccessComponent } from './cab-booking-success/cab-booking-success.component';
import { CabBookingComponent } from './cab-booking/cab-booking.component';

export default [
  {
    path: 'booking',
    component: CabBookingComponent
  },
  {
    path: 'booking-payment',
    component: CabBookingPaymentComponent
  },
  {
    path: 'booking-success',
    component: CabBookingSuccessComponent
  },
  {
    path: 'booking-failed',
    component: CabBookingFailedComponent
  }
] as Routes;
