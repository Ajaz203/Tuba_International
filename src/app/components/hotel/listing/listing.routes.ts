import { Routes } from '@angular/router';
import { HotelGrid2Component } from './grid/hotel-grid2/hotel-grid2.component';
import { HotelGrid3Component } from './grid/hotel-grid3/hotel-grid3.component';
import { HotelGrid4Component } from './grid/hotel-grid4/hotel-grid4.component';
import { HotelSliderComponent } from './hotel-slider/hotel-slider.component';
import { HotelGoogleLeftsideMapComponent } from './leftside-map/hotel-google-leftside-map/hotel-google-leftside-map.component';
import { HotelLeafletLeftsideMapComponent } from './leftside-map/hotel-leaflet-leftside-map/hotel-leaflet-leftside-map.component';
import { HotelListMultipleImageComponent } from './list-view/hotel-list-multiple-image/hotel-list-multiple-image.component';
import { HotelListSliderComponent } from './list-view/hotel-list-slider/hotel-list-slider.component';
import { HotelListVideoComponent } from './list-view/hotel-list-video/hotel-list-video.component';
import { ListviewComponent } from './list-view/listview/listview.component';
import { HotelListGoogleMapComponent } from './list-view/map/hotel-list-google-map/hotel-list-google-map.component';
import { HotelListLeafletMapComponent } from './list-view/map/hotel-list-leaflet-map/hotel-list-leaflet-map.component';
import { HotelGoogleMapModalComponent } from './map-modal/hotel-google-map-modal/hotel-google-map-modal.component';
import { HotelLeafletMapModalComponent } from './map-modal/hotel-leaflet-map-modal/hotel-leaflet-map-modal.component';
import { HotelGoogleMapComponent } from './map/hotel-google-map/hotel-google-map.component';
import { HotelLeafletMapComponent } from './map/hotel-leaflet-map/hotel-leaflet-map.component';
import { HotelGoogleOnclickComponent } from './onclick-map/hotel-google-onclick/hotel-google-onclick.component';
import { HotelLeafletOnclickComponent } from './onclick-map/hotel-leaflet-onclick/hotel-leaflet-onclick.component';
import { HotelLeftSidebarComponent } from './sidebar/hotel-left-sidebar/hotel-left-sidebar.component';
import { HotelNoSidebarComponent } from './sidebar/hotel-no-sidebar/hotel-no-sidebar.component';
import { HotelRightSidebarComponent } from './sidebar/hotel-right-sidebar/hotel-right-sidebar.component';

export default[
  {
    path: 'grid/2-grid',
    component: HotelGrid2Component
  },
  {
    path: 'grid/3-grid',
    component: HotelGrid3Component
  },
  {
    path: 'grid/4-grid',
    component: HotelGrid4Component
  },
  {
    path: 'sidebar/left-sidebar',
    component: HotelLeftSidebarComponent
  },
  {
    path: 'sidebar/right-sidebar',
    component: HotelRightSidebarComponent
  },
  {
    path: 'sidebar/no-sidebar',
    component: HotelNoSidebarComponent
  },
  {
    path: 'map/google-map',
    component: HotelGoogleMapComponent
  },
  {
    path: 'map/leaflet-map',
    component: HotelLeafletMapComponent
  },
  {
    path: 'map-modal/google-map',
    component: HotelGoogleMapModalComponent
  },
  {
    path: 'map-modal/leaflet-map',
    component: HotelLeafletMapModalComponent
  },
  {
    path: 'onclick-map/google-map',
    component: HotelGoogleOnclickComponent
  },
  {
    path: 'onclick-map/leaflet-map',
    component: HotelLeafletOnclickComponent
  },
  {
    path: 'leftside-map/google-map',
    component: HotelGoogleLeftsideMapComponent
  },
  {
    path: 'leftside-map/leaflet-map',
    component: HotelLeafletLeftsideMapComponent
  },
  {
    path: 'list-view/list-view',
    component: ListviewComponent
  },
  {
    path: 'list-view/map/google-map',
    component: HotelListGoogleMapComponent
  },
  {
    path: 'list-view/map/leaflet-map',
    component: HotelListLeafletMapComponent
  },
  {
    path: 'list-view/slider',
    component: HotelListSliderComponent
  },
  {
    path: 'list-view/multiple-image',
    component: HotelListMultipleImageComponent
  },
  {
    path: 'list-view/video',
    component: HotelListVideoComponent
  },
  {
    path: 'hotel-slider',
    component: HotelSliderComponent
  }
] as Routes;
