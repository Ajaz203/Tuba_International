import { Component, Input } from '@angular/core';
import { RestaurantCartSkeletonComponent } from './restaurant-cart-skeleton/restaurant-cart-skeleton.component';

@Component({
    selector: 'app-restaurant-single-page-skeleton',
    templateUrl: './restaurant-single-page-skeleton.component.html',
    styleUrl: './restaurant-single-page-skeleton.component.scss',
    standalone: true,
    imports: [RestaurantCartSkeletonComponent]
})
export class RestaurantSinglePageSkeletonComponent {

  @Input() filterType: string;

}
