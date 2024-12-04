import { Routes } from '@angular/router';
import { HotelPageClassicComponent } from './hotel-page-classic/hotel-page-classic.component';
import { HotelPageImageBoxComponent } from './hotel-page-image-box/hotel-page-image-box.component';
import { HotelPageImageSliderComponent } from './hotel-page-image-slider/hotel-page-image-slider.component';
import { HotelPageInfoTabComponent } from './hotel-page-info-tab/hotel-page-info-tab.component';
import { HotelPageLeftSidebarComponent } from './hotel-page-left-sidebar/hotel-page-left-sidebar.component';
import { HotelPageThemeBreadcrumbComponent } from './hotel-page-theme-breadcrumb/hotel-page-theme-breadcrumb.component';
import { HotelPageThumbnailImageComponent } from './hotel-page-thumbnail-image/hotel-page-thumbnail-image.component';
import { HotelPageWithoutTopComponent } from './hotel-page-without-top/hotel-page-without-top.component';

export default [
  {
    path: 'classic',
    component: HotelPageClassicComponent
  },
  {
    path: 'without-top',
    component: HotelPageWithoutTopComponent
  },
  {
    path: 'left-sidebar',
    component: HotelPageLeftSidebarComponent
  },
  {
    path: 'info-tab',
    component: HotelPageInfoTabComponent
  },
  {
    path: 'image-slider',
    component: HotelPageImageSliderComponent
  },
  {
    path: 'thumbnail-image',
    component: HotelPageThumbnailImageComponent
  },
  {
    path: 'image-box',
    component: HotelPageImageBoxComponent
  },
  {
    path: 'theme-breadcrumb',
    component: HotelPageThemeBreadcrumbComponent
  }
] as Routes;
