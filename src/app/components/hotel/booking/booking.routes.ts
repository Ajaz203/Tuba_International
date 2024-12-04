import { Routes } from '@angular/router';
import { HotelBookingFailedComponent } from './hotel-booking-failed/hotel-booking-failed.component';
import { HotelBookingSuccessComponent } from './hotel-booking-success/hotel-booking-success.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelCheckoutComponent } from './hotel-checkout/hotel-checkout.component';

export default [
  {
    path: 'hotel-booking',
    component: HotelBookingComponent
  },
  {
    path: 'checkout',
    component: HotelCheckoutComponent
  },
  {
    path: 'hotel-booking-failed',
    component: HotelBookingFailedComponent
  },
  {
    path: 'hotel-booking-success',
    component: HotelBookingSuccessComponent
  }
] as Routes;
