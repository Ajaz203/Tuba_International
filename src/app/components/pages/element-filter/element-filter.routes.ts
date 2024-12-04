import { Routes } from '@angular/router';
import { FlightListTopFilterComponent } from '../../flight/listing/flight-list-top-filter/flight-list-top-filter.component';
import { HotelGoogleMapComponent } from '../../hotel/listing/map/hotel-google-map/hotel-google-map.component';
import { TourGrid4Component } from '../../tour/listing/grid/tour-grid4/tour-grid4.component';
import { TourLeftSidebarComponent } from '../../tour/listing/sidebar/tour-left-sidebar/tour-left-sidebar.component';

export default [
  {
    path: 'sidebar',
    component: TourLeftSidebarComponent
  },
  {
    path: 'popup',
    component: HotelGoogleMapComponent
  },
  {
    path: 'slide-down',
    component: TourGrid4Component
  },
  {
    path: 'top-filter',
    component: FlightListTopFilterComponent
  }
] as Routes;
