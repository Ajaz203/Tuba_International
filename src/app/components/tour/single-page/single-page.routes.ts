import { Routes } from '@angular/router';
import { TourFullPageDetailsComponent } from './tour-full-page-details/tour-full-page-details.component';
import { TourFullPageSliderComponent } from './tour-full-page-slider/tour-full-page-slider.component';
import { TourPageClassicDesignComponent } from './tour-page-classic-design/tour-page-classic-design.component';
import { TourPageLeftSidebarComponent } from './tour-page-left-sidebar/tour-page-left-sidebar.component';
import { TourPageSliderComponent } from './tour-page-slider/tour-page-slider.component';
import { TourPageTabComponent } from './tour-page-tab/tour-page-tab.component';
import { TourPageVideoComponent } from './tour-page-video/tour-page-video.component';

export default[
  {
    path: 'tab',
    component: TourPageTabComponent
  },
  {
    path: 'full-page-detail',
    component: TourFullPageDetailsComponent
  },
  {
    path: 'slider',
    component: TourPageSliderComponent
  },
  {
    path: 'full-page-slider',
    component: TourFullPageSliderComponent
  },
  {
    path: 'classic-design',
    component: TourPageClassicDesignComponent
  },
  {
    path: 'video',
    component: TourPageVideoComponent
  },
  {
    path: 'left-sidebar',
    component: TourPageLeftSidebarComponent
  }
] as Routes;
