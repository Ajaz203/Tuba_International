import { Routes } from '@angular/router';
import { CabDemoClassicComponent } from './cab-demo/cab-demo-classic/cab-demo-classic.component';
import { CabDemoMapComponent } from './cab-demo/cab-demo-map/cab-demo-map.component';
import { CabDemoModernComponent } from './cab-demo/cab-demo-modern/cab-demo-modern.component';
import { FlightDemoLeftSidebarComponent } from './flight-demo/flight-demo-left-sidebar/flight-demo-left-sidebar.component';
import { FlightDemoMinimalComponent } from './flight-demo/flight-demo-minimal/flight-demo-minimal.component';
import { FlightDemoModernComponent } from './flight-demo/flight-demo-modern/flight-demo-modern.component';
import { HotelDemoClassicComponent } from './hotel-demo/hotel-demo-classic/hotel-demo-classic.component';
import { HotelDemoMinimalComponent } from './hotel-demo/hotel-demo-minimal/hotel-demo-minimal.component';
import { HotelDemoVectorComponent } from './hotel-demo/hotel-demo-vector/hotel-demo-vector.component';
import { MixDemoClassicComponent } from './mix-demo/mix-demo-classic/mix-demo-classic.component';
import { MixDemoMinimalComponent } from './mix-demo/mix-demo-minimal/mix-demo-minimal.component';
import { RestaurantDemoClassicComponent } from './restaurant-demo/restaurant-demo-classic/restaurant-demo-classic.component';
import { RestaurantDemoMinimalComponent } from './restaurant-demo/restaurant-demo-minimal/restaurant-demo-minimal.component';
import { TourDemoModernComponent } from './tour-demo/tour-demo-modern/tour-demo-modern.component';
import { TourDemoTrendingComponent } from './tour-demo/tour-demo-trending/tour-demo-trending.component';
import { TourDemoVectorComponent } from './tour-demo/tour-demo-vector/tour-demo-vector.component';

export default[
  {
    path: 'hotel/classic',
    component: HotelDemoClassicComponent
  },
  {
    path: 'hotel/minimal',
    component: HotelDemoMinimalComponent
  },
  {
    path: 'hotel/vector',
    component: HotelDemoVectorComponent
  },
  {
    path: 'tour/modern',
    component: TourDemoModernComponent
  },
  {
    path: 'tour/trending',
    component: TourDemoTrendingComponent
  },
  {
    path: 'tour/vector',
    component: TourDemoVectorComponent
  },
  {
    path: 'cab/modern',
    component: CabDemoModernComponent
  },
  {
    path: 'cab/classic',
    component: CabDemoClassicComponent
  },
  {
    path: 'cab/map-demo',
    component: CabDemoMapComponent
  },
  {
    path: 'flight/modern',
    component: FlightDemoModernComponent
  },
  {
    path: 'flight/minimal',
    component: FlightDemoMinimalComponent
  },
  {
    path: 'flight/left-sidebar',
    component: FlightDemoLeftSidebarComponent
  },
  {
    path: 'restaurant/classic',
    component: RestaurantDemoClassicComponent
  },
  {
    path: 'restaurant/minimal',
    component: RestaurantDemoMinimalComponent
  },
  {
    path: 'mix-demo/classic',
    component: MixDemoClassicComponent
  },
  {
    path: 'mix-demo/minimal',
    component: MixDemoMinimalComponent
  }
] as Routes;
