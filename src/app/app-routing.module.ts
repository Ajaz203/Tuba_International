const routes: Routes = [
  // ... other routes
  {
    path: 'hotels',
    loadComponent: () => import('./components/hotels/hotels.component').then(m => m.HotelsComponent)
  },
  {
    path: 'hotel-details/:id',
    loadComponent: () => import('./components/hotels/hotel-details/hotel-details.component')
      .then(m => m.HotelDetailsComponent)
  }
]; 