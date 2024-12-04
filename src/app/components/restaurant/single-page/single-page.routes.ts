import { Routes } from '@angular/router';
import { RestaurantPageClassicComponent } from './restaurant-page-classic/restaurant-page-classic.component';
import { RestaurantPageImageSliderComponent } from './restaurant-page-image-slider/restaurant-page-image-slider.component';
import { RestaurantPageLeftCartComponent } from './restaurant-page-left-cart/restaurant-page-left-cart.component';

export default [
  {
    path: 'classic',
    component: RestaurantPageClassicComponent
  },
  {
    path: 'image-slider',
    component: RestaurantPageImageSliderComponent
  },
  {
    path: 'left-cart',
    component: RestaurantPageLeftCartComponent
  }
] as Routes;
