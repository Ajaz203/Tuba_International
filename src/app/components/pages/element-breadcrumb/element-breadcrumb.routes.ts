import { Routes } from '@angular/router';
import { CabListLeftSidebarComponent } from '../../cab/listing/list-view/cab-list-left-sidebar/cab-list-left-sidebar.component';
import { FlightListRightSidebarComponent } from '../../flight/listing/flight-list-right-sidebar/flight-list-right-sidebar.component';
import { HotelGrid2Component } from '../../hotel/listing/grid/hotel-grid2/hotel-grid2.component';
import { RestaurantGrid3Component } from '../../restaurant/listing/grid-view/restaurant-grid3/restaurant-grid3.component';
import { TourGrid2Component } from '../../tour/listing/grid/tour-grid2/tour-grid2.component';
import { PortfolioGrid2Component } from '../portfolio/portfolio-grid2/portfolio-grid2.component';

export default[
  {
    path: 'basic',
    component: HotelGrid2Component
  },
  {
    path: 'image-with-effect',
    component: PortfolioGrid2Component
  },
  {
    path: 'right-content',
    component: CabListLeftSidebarComponent
  },
  {
    path: 'only-image',
    component: FlightListRightSidebarComponent
  },
  {
    path: 'with-searchbar',
    component: RestaurantGrid3Component
  },
  {
    path: 'bird-flying',
    component: TourGrid2Component
  }
] as Routes;
