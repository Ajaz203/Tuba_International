import { Routes } from '@angular/router';
import { CabNotFoundComponent } from './cab-not-found/cab-not-found.component';
import { CabSliderComponent } from './cab-slider/cab-slider.component';
import { CabGrid3Component } from './grid-view/cab-grid3/cab-grid3.component';
import { CabGrid4Component } from './grid-view/cab-grid4/cab-grid4.component';
import { CabListLeftSidebarComponent } from './list-view/cab-list-left-sidebar/cab-list-left-sidebar.component';
import { CabListRightSidebarComponent } from './list-view/cab-list-right-sidebar/cab-list-right-sidebar.component';
import { CabGoogleMapComponent } from './map/cab-google-map/cab-google-map.component';
import { CabLeafletMapComponent } from './map/cab-leaflet-map/cab-leaflet-map.component';
import { CabLeftSidebarComponent } from './sidebar/cab-left-sidebar/cab-left-sidebar.component';
import { CabNoSidebarComponent } from './sidebar/cab-no-sidebar/cab-no-sidebar.component';
import { CabRightSidebarComponent } from './sidebar/cab-right-sidebar/cab-right-sidebar.component';

export default[
  {
    path: 'list-view/left-sidebar',
    component: CabListLeftSidebarComponent
  },
  {
    path: 'list-view/right-sidebar',
    component: CabListRightSidebarComponent
  },
  {
    path: 'grid-view/3-grid',
    component: CabGrid3Component
  },
  {
    path: 'grid-view/4-grid',
    component: CabGrid4Component
  },
  {
    path: 'sidebar/left-sidebar',
    component: CabLeftSidebarComponent
  },
  {
    path: 'sidebar/right-sidebar',
    component: CabRightSidebarComponent
  },
  {
    path: 'sidebar/no-sidebar',
    component: CabNoSidebarComponent
  },
  {
    path: 'map/google-map',
    component: CabGoogleMapComponent
  },
  {
    path: 'map/leaflet-map',
    component: CabLeafletMapComponent
  },
  {
    path: 'slider',
    component: CabSliderComponent
  },
  {
    path: 'not-found',
    component: CabNotFoundComponent
  }
] as Routes;
