import { Routes } from '@angular/router';

export default [
  {
    path: 'portfolio',
    loadChildren: () => import('../../components/pages/portfolio/portfolio.routes')
  },
  {
    path: 'blog-page',
    loadChildren: () => import('../../components/pages/blog-page/blog-page.routes')
  },
  {
    path: 'blog-detail',
    loadChildren: () => import('../../components/pages/blog-detail-page/blog-detail-page.routes')
  },
  {
    path: 'element-filter',
    loadChildren: () => import('../../components/pages/element-filter/element-filter.routes')
  },
  {
    path: 'element-breadcrumb',
    loadChildren: () => import('../../components/pages/element-breadcrumb/element-breadcrumb.routes')
  },
  {
    path: 'other-pages',
    loadChildren: () => import('../../components/pages/other-pages/other-pages.routes')
  },
  {
    path: 'element-pages',
    loadChildren: () => import('../../components/pages/element-pages/element-pages.routes')
  }
] as Routes;

