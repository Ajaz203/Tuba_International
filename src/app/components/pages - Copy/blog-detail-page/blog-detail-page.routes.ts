import { Routes } from '@angular/router';
import { BlogDetailGalleryComponent } from './blog-detail-gallery/blog-detail-gallery.component';
import { BlogDetailLeftSidebarComponent } from './blog-detail-left-sidebar/blog-detail-left-sidebar.component';
import { BlogDetailNoSidebarComponent } from './blog-detail-no-sidebar/blog-detail-no-sidebar.component';
import { BlogDetailRightSidebarComponent } from './blog-detail-right-sidebar/blog-detail-right-sidebar.component';
import { BlogDetailVideoComponent } from './blog-detail-video/blog-detail-video.component';

export default [
  {
    path: 'left-sidebar',
    component: BlogDetailLeftSidebarComponent
  },
  {
    path: 'right-sidebar',
    component: BlogDetailRightSidebarComponent
  },
  {
    path: 'no-sidebar',
    component: BlogDetailNoSidebarComponent
  },
  {
    path: 'detail-with-gallery',
    component: BlogDetailGalleryComponent
  },
  {
    path: 'detail-with-video',
    component: BlogDetailVideoComponent
  }
] as Routes;
