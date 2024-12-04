import { Routes } from '@angular/router';

export const router: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../../components/home/home.routes')
  },
  {
    path: 'hotel/listing',
    loadChildren: () => import('../../components/hotel/listing/listing.routes')
  },
  {
    path: 'hotel/single-page',
    loadChildren: () => import('../../components/hotel/single-page/single-page.routes')
  },
  {
    path: 'hotel/booking',
    loadChildren: () => import('../../components/hotel/booking/booking.routes')
  },
  {
    path: 'tour/listing',
    loadChildren: () => import('../../components/tour/listing/listing.routes')
  },
  {
    path: 'tour/single-page',
    loadChildren: () => import('../../components/tour/single-page/single-page.routes')
  },
  {
    path: 'tour/booking',
    loadChildren: () => import('../../components/tour/booking/booking.routes')
  },
  {
    path: 'flight/listing',
    loadChildren: () => import('../../components/flight/listing/listing.routes')
  },
  {
    path: 'flight/booking',
    loadChildren: () => import('../../components/flight/booking/booking.routes')
  },
  {
    path: 'flight/booking',
    loadChildren: () => import('../../components/flight/booking/booking.routes')
  },
  {
    path: 'cab/listing',
    loadChildren: () => import('../../components/cab/listing/listing.routes')
  },
  {
    path: 'cab/booking',
    loadChildren: () => import('../../components/cab/booking/booking.routes')
  },
  {
    path: 'cab/single-details',
    loadChildren: () => import('../../components/cab/single-detail/single-detail.routes')
  },
  {
    path: 'restaurant/listing',
    loadChildren: () => import('../../components/restaurant/listing/listing.routes')
  },
  {
    path: 'restaurant/single-page',
    loadChildren: () => import('../../components/restaurant/single-page/single-page.routes')
  },
  {
    path: 'restaurant/booking',
    loadChildren: () => import('../../components/restaurant/booking/booking.routes')
  },
  {
    path: 'page',
    loadChildren: () => import('../../components/pages/pages.routes')
  }
]
