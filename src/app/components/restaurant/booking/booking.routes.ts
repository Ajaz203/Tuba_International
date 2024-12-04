import { Routes } from '@angular/router';
import { RestaurantCheckoutComponent } from './restaurant-checkout/restaurant-checkout.component';
import { RestaurantOrderFailedComponent } from './restaurant-order-failed/restaurant-order-failed.component';
import { RestaurantOrderSuccessComponent } from './restaurant-order-success/restaurant-order-success.component';

export default [
  {
    path: 'checkout',
    component: RestaurantCheckoutComponent
  },
  {
    path: 'order-failed',
    component: RestaurantOrderFailedComponent
  },
  {
    path: 'order-success',
    component: RestaurantOrderSuccessComponent
  }
] as Routes;

