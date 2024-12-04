import { Routes } from '@angular/router';
import { FlightListLeftSidebarComponent } from './flight-list-left-sidebar/flight-list-left-sidebar.component';
import { FlightListNotFoundComponent } from './flight-list-not-found/flight-list-not-found.component';
import { FlightListRightSidebarComponent } from './flight-list-right-sidebar/flight-list-right-sidebar.component';
import { FlightListRoundTripComponent } from './flight-list-round-trip/flight-list-round-trip.component';
import { FlightListTopFilterComponent } from './flight-list-top-filter/flight-list-top-filter.component';

export default [
  {
    path: 'left-sidebar',
    component: FlightListLeftSidebarComponent
  },
  {
    path: 'right-sidebar',
    component: FlightListRightSidebarComponent
  },
  {
    path: 'top-filter',
    component: FlightListTopFilterComponent
  },
  {
    path: 'round-trip',
    component: FlightListRoundTripComponent
  },
  {
    path: 'not-found',
    component: FlightListNotFoundComponent
  }
] as Routes;
