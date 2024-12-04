import { Component, Input } from '@angular/core';
import { RestaurantDetailSkeletonComponent } from './restaurant-detail-skeleton/restaurant-detail-skeleton.component';
import { RestaurantFilterSkeletonComponent } from './restaurant-filter-skeleton/restaurant-filter-skeleton.component';
import { GridSkeletonComponent } from '../skeleton-loader/grid-skeleton/grid-skeleton.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-restaurant-skeleton',
    templateUrl: './restaurant-skeleton.component.html',
    styleUrl: './restaurant-skeleton.component.scss',
    standalone: true,
    imports: [NgClass, GridSkeletonComponent, RestaurantFilterSkeletonComponent, RestaurantDetailSkeletonComponent]
})
export class RestaurantSkeletonComponent {

  @Input() filterType: string;
  @Input() gridType: string;
  @Input() horizontalFilter: boolean;
  @Input() filter: boolean;
  @Input() mapFilter: boolean;
  @Input() mapSide: string;
}
