import { Routes } from '@angular/router';
import { RestaurantGrid2Component } from './grid-view/restaurant-grid2/restaurant-grid2.component';
import { RestaurantGrid3Component } from './grid-view/restaurant-grid3/restaurant-grid3.component';
import { RestaurantGrid4Component } from './grid-view/restaurant-grid4/restaurant-grid4.component';
import { RestaurantGoogleLeftsideMapComponent } from './leftside-map/restaurant-google-leftside-map/restaurant-google-leftside-map.component';
import { RestaurantLeafletLeftsideMapComponent } from './leftside-map/restaurant-leaflet-leftside-map/restaurant-leaflet-leftside-map.component';
import { RestaurantGoogleMapModalComponent } from './map-modal/restaurant-google-map-modal/restaurant-google-map-modal.component';
import { RestaurantLeafletMapModalComponent } from './map-modal/restaurant-leaflet-map-modal/restaurant-leaflet-map-modal.component';
import { RestaurantGoogleMapComponent } from './map/restaurant-google-map/restaurant-google-map.component';
import { RestaurantLeafletMapComponent } from './map/restaurant-leaflet-map/restaurant-leaflet-map.component';
import { RestaurantGoogleOnclickMapComponent } from './onclick-map/restaurant-google-onclick-map/restaurant-google-onclick-map.component';
import { RestaurantLeafletOnclickMapComponent } from './onclick-map/restaurant-leaflet-onclick-map/restaurant-leaflet-onclick-map.component';
import { RestaurantFullWidthComponent } from './restaurant-full-width/restaurant-full-width.component';
import { RestaurantImageSliderComponent } from './restaurant-image-slider/restaurant-image-slider.component';
import { RestaurantNotFoundComponent } from './restaurant-not-found/restaurant-not-found.component';
import { RestaurantLeftSidebarComponent } from './sidebar/restaurant-left-sidebar/restaurant-left-sidebar.component';
import { RestaurantNoSidebarComponent } from './sidebar/restaurant-no-sidebar/restaurant-no-sidebar.component';
import { RestaurantRightSidebarComponent } from './sidebar/restaurant-right-sidebar/restaurant-right-sidebar.component';

export default[
  {
    path: 'grid-view/2-grid',
    component: RestaurantGrid2Component
  },
  {
    path: 'grid-view/3-grid',
    component: RestaurantGrid3Component
  },
  {
    path: 'grid-view/4-grid',
    component: RestaurantGrid4Component
  },
  {
    path: 'sidebar/left-sidebar',
    component: RestaurantLeftSidebarComponent
  },
  {
    path: 'sidebar/right-sidebar',
    component: RestaurantRightSidebarComponent
  },
  {
    path: 'sidebar/no-sidebar',
    component: RestaurantNoSidebarComponent
  },
  {
    path: 'map/google-map',
    component: RestaurantGoogleMapComponent
  },
  {
    path: 'map/leaflet-map',
    component: RestaurantLeafletMapComponent
  },
  {
    path: 'map-modal/google-map',
    component: RestaurantGoogleMapModalComponent
  },
  {
    path: 'map-modal/leaflet-map',
    component: RestaurantLeafletMapModalComponent
  },
  {
    path: 'onclick-map/google-map',
    component: RestaurantGoogleOnclickMapComponent
  },
  {
    path: 'onclick-map/leaflet-map',
    component: RestaurantLeafletOnclickMapComponent
  },
  {
    path: 'left-side-map/google-map',
    component: RestaurantGoogleLeftsideMapComponent
  },
  {
    path: 'left-side-map/leaflet-map',
    component: RestaurantLeafletLeftsideMapComponent
  },
  {
    path: 'full-width',
    component: RestaurantFullWidthComponent
  },
  {
    path: 'image-slider',
    component: RestaurantImageSliderComponent
  },
  {
    path: 'not-found',
    component: RestaurantNotFoundComponent
  }
] as Routes;

