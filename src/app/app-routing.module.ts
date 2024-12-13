const routes: Routes = [
  // ... other routes
  {
    path: 'hotels',
    loadComponent: () => import('./components/hotels/hotels.component').then(m => m.HotelsComponent)
  }
]; 