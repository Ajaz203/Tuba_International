import { Routes } from '@angular/router';
import { TourBookingFailedComponent } from './tour-booking-failed/tour-booking-failed.component';
import { TourBookingSuccessComponent } from './tour-booking-success/tour-booking-success.component';
import { TourBookingComponent } from './tour-booking/tour-booking.component';
import { TourCheckoutComponent } from './tour-checkout/tour-checkout.component';

export default [
  {
    path: 'tour-booking',
    component: TourBookingComponent
  },
  {
    path: 'checkout',
    component: TourCheckoutComponent
  },
  {
    path: 'tour-booking-failed',
    component: TourBookingFailedComponent
  },
  {
    path: 'tour-booking-success',
    component: TourBookingSuccessComponent
  }
] as Routes;
