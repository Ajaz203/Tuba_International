import { Routes } from '@angular/router';
import { TourGrid2Component } from './grid/tour-grid2/tour-grid2.component';
import { TourGrid3Component } from './grid/tour-grid3/tour-grid3.component';
import { TourGrid4Component } from './grid/tour-grid4/tour-grid4.component';
import { TourListMultipleImagesComponent } from './list-view/tour-list-multiple-images/tour-list-multiple-images.component';
import { TourListSliderComponent } from './list-view/tour-list-slider/tour-list-slider.component';
import { TourListVideoComponent } from './list-view/tour-list-video/tour-list-video.component';
import { TourListViewComponent } from './list-view/tour-list-view/tour-list-view.component';
import { TourLeftSidebarComponent } from './sidebar/tour-left-sidebar/tour-left-sidebar.component';
import { TourNoSidebarComponent } from './sidebar/tour-no-sidebar/tour-no-sidebar.component';
import { TourRightSidebarComponent } from './sidebar/tour-right-sidebar/tour-right-sidebar.component';
import { TourClassicComponent } from './tour-classic/tour-classic.component';
import { TourMinimalComponent } from './tour-minimal/tour-minimal.component';
import { TourWithSliderComponent } from './tour-with-slider/tour-with-slider.component';

export default [
  {
    path: 'grid/2-grid',
    component: TourGrid2Component
  },
  {
    path: 'grid/3-grid',
    component: TourGrid3Component
  },
  {
    path: 'grid/4-grid',
    component: TourGrid4Component
  },
  {
    path: 'sidebar/left-sidebar',
    component: TourLeftSidebarComponent
  },
  {
    path: 'sidebar/right-sidebar',
    component: TourRightSidebarComponent
  },
  {
    path: 'sidebar/no-sidebar',
    component: TourNoSidebarComponent
  },
  {
    path: 'list-view/list-view',
    component: TourListViewComponent
  },
  {
    path: 'list-view/slider',
    component: TourListSliderComponent
  },
  {
    path: 'list-view/multiple-images',
    component: TourListMultipleImagesComponent
  },
  {
    path: 'list-view/video',
    component: TourListVideoComponent
  },
  {
    path: 'slider',
    component: TourWithSliderComponent
  },
  {
    path: 'minimal',
    component: TourMinimalComponent
  },
  {
    path: 'classic',
    component: TourClassicComponent
  }
] as Routes;
