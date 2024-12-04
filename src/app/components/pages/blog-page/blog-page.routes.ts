import { Routes } from '@angular/router';
import { BlogCreativeLeftSidebarComponent } from './blog-creative-left-sidebar/blog-creative-left-sidebar.component';
import { BlogCreativeNoSidebarComponent } from './blog-creative-no-sidebar/blog-creative-no-sidebar.component';
import { BlogCreativeRightSidebarComponent } from './blog-creative-right-sidebar/blog-creative-right-sidebar.component';
import { BlogLeftSidebarComponent } from './blog-left-sidebar/blog-left-sidebar.component';
import { BlogListLeftSidebarComponent } from './blog-list-left-sidebar/blog-list-left-sidebar.component';
import { BlogListNoSidebarComponent } from './blog-list-no-sidebar/blog-list-no-sidebar.component';
import { BlogListRightSidebarComponent } from './blog-list-right-sidebar/blog-list-right-sidebar.component';
import { BlogMasonryLeftSidebarComponent } from './blog-masonry-left-sidebar/blog-masonry-left-sidebar.component';
import { BlogMasonryNoSidebarComponent } from './blog-masonry-no-sidebar/blog-masonry-no-sidebar.component';
import { BlogMasonryRightSidebarComponent } from './blog-masonry-right-sidebar/blog-masonry-right-sidebar.component';
import { BlogMixGridLeftSidebarComponent } from './blog-mix-grid-left-sidebar/blog-mix-grid-left-sidebar.component';
import { BlogMixGridRightSidebarComponent } from './blog-mix-grid-right-sidebar/blog-mix-grid-right-sidebar.component';
import { BlogMixListLeftSidebarComponent } from './blog-mix-list-left-sidebar/blog-mix-list-left-sidebar.component';
import { BlogMixListRightSidebarComponent } from './blog-mix-list-right-sidebar/blog-mix-list-right-sidebar.component';
import { BlogNoSidebarComponent } from './blog-no-sidebar/blog-no-sidebar.component';
import { BlogRightSidebarComponent } from './blog-right-sidebar/blog-right-sidebar.component';

export default[
  {
    path: 'left-sidebar',
    component: BlogLeftSidebarComponent
  },
  {
    path: 'right-sidebar',
    component: BlogRightSidebarComponent
  },
  {
    path: 'no-sidebar',
    component: BlogNoSidebarComponent
  },
  {
    path: 'creative-left-sidebar',
    component: BlogCreativeLeftSidebarComponent
  },
  {
    path: 'creative-right-sidebar',
    component: BlogCreativeRightSidebarComponent
  },
  {
    path: 'creative-no-sidebar',
    component: BlogCreativeNoSidebarComponent
  },
  {
    path: 'list-left-sidebar',
    component: BlogListLeftSidebarComponent
  },
  {
    path: 'list-right-sidebar',
    component: BlogListRightSidebarComponent
  },
  {
    path: 'list-no-sidebar',
    component: BlogListNoSidebarComponent
  },
  {
    path: 'masonry-left-sidebar',
    component: BlogMasonryLeftSidebarComponent
  },
  {
    path: 'masonry-right-sidebar',
    component: BlogMasonryRightSidebarComponent
  },
  {
    path: 'masonry-no-sidebar',
    component: BlogMasonryNoSidebarComponent
  },
  {
    path: 'mix-list-left-sidebar',
    component: BlogMixListLeftSidebarComponent
  },
  {
    path: 'mix-list-right-sidebar',
    component: BlogMixListRightSidebarComponent
  },
  {
    path: 'mix-grid-left-sidebar',
    component: BlogMixGridLeftSidebarComponent
  },
  {
    path: 'mix-grid-right-sidebar',
    component: BlogMixGridRightSidebarComponent
  }
] as Routes;

