import { Routes } from '@angular/router';
import { PortfolioCenterSlidesComponent } from './portfolio-center-slides/portfolio-center-slides.component';
import { PortfolioCreative1Component } from './portfolio-creative1/portfolio-creative1.component';
import { PortfolioCreative2Component } from './portfolio-creative2/portfolio-creative2.component';
import { PortfolioCreative3Component } from './portfolio-creative3/portfolio-creative3.component';
import { PortfolioCreative4Component } from './portfolio-creative4/portfolio-creative4.component';
import { PortfolioGrid2TitleComponent } from './portfolio-grid2-title/portfolio-grid2-title.component';
import { PortfolioGrid2Component } from './portfolio-grid2/portfolio-grid2.component';
import { PortfolioGrid3TitleComponent } from './portfolio-grid3-title/portfolio-grid3-title.component';
import { PortfolioGrid3Component } from './portfolio-grid3/portfolio-grid3.component';
import { PortfolioGrid4TitleComponent } from './portfolio-grid4-title/portfolio-grid4-title.component';
import { PortfolioGrid4Component } from './portfolio-grid4/portfolio-grid4.component';
import { PortfolioMasonry3Component } from './portfolio-masonry3/portfolio-masonry3.component';
import { PortfolioMasonry4Component } from './portfolio-masonry4/portfolio-masonry4.component';
import { PortfolioParallaxImageComponent } from './portfolio-parallax-image/portfolio-parallax-image.component';

export default [
  {
    path: '2-grid',
    component: PortfolioGrid2Component
  },
  {
    path: '3-grid',
    component: PortfolioGrid3Component
  },
  {
    path: '4-grid',
    component: PortfolioGrid4Component
  },
  {
    path: '2-grid-title',
    component: PortfolioGrid2TitleComponent
  },
  {
    path: '3-grid-title',
    component: PortfolioGrid3TitleComponent
  },
  {
    path: '4-grid-title',
    component: PortfolioGrid4TitleComponent
  },
  {
    path: '3-masonry',
    component: PortfolioMasonry3Component
  },
  {
    path: '4-masonry',
    component: PortfolioMasonry4Component
  },
  {
    path: 'parallax',
    component: PortfolioParallaxImageComponent
  },
  {
    path: 'center-slide',
    component: PortfolioCenterSlidesComponent
  },
  {
    path: 'creative-1',
    component: PortfolioCreative1Component
  },
  {
    path: 'creative-2',
    component: PortfolioCreative2Component
  },
  {
    path: 'creative-3',
    component: PortfolioCreative3Component
  },
  {
    path: 'creative-4',
    component: PortfolioCreative4Component
  }
] as Routes;

