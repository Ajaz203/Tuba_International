import { Routes } from '@angular/router';
import { FlightBookingAddOnsComponent } from './flight-booking-add-ons/flight-booking-add-ons.component';
import { FlightBookingFailedComponent } from './flight-booking-failed/flight-booking-failed.component';
import { FlightBookingPaymentComponent } from './flight-booking-payment/flight-booking-payment.component';
import { FlightBookingSuccessComponent } from './flight-booking-success/flight-booking-success.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';

export default [
  {
    path: 'book-now',
    component: FlightBookingComponent
  },
  {
    path: 'book-add-ons',
    component: FlightBookingAddOnsComponent
  },
  {
    path: 'booking-payment',
    component: FlightBookingPaymentComponent
  },
  {
    path: 'flight-booking-success',
    component: FlightBookingSuccessComponent
  },
  {
    path: 'flight-booking-failed',
    component: FlightBookingFailedComponent
  }
] as Routes;
