import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-restaurant-detail-skeleton',
    templateUrl: './restaurant-detail-skeleton.component.html',
    styleUrl: './restaurant-detail-skeleton.component.scss',
    standalone: true
})
export class RestaurantDetailSkeletonComponent {

  @Input() gridType: string;
  @Input() horizontalFilter: boolean;
}
