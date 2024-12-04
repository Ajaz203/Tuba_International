import { Component, Input } from '@angular/core';
import { HotelSkeletonDetailsComponent } from './hotel-skeleton-details/hotel-skeleton-details.component';
import { HotelListSkeletonComponent } from './hotel-list-skeleton/hotel-list-skeleton.component';
import { HotelSkeletonFilterComponent } from './hotel-skeleton-filter/hotel-skeleton-filter.component';
import { GridSkeletonComponent } from '../skeleton-loader/grid-skeleton/grid-skeleton.component';
import { NgClass } from '@angular/common';
import { HotelSkeletonSearchBoxComponent } from './hotel-skeleton-search-box/hotel-skeleton-search-box.component';

@Component({
    selector: 'app-hotel-skeleton',
    templateUrl: './hotel-skeleton.component.html',
    styleUrls: ['./hotel-skeleton.component.scss'],
    standalone: true,
    imports: [HotelSkeletonSearchBoxComponent, NgClass, GridSkeletonComponent, HotelSkeletonFilterComponent, HotelListSkeletonComponent, HotelSkeletonDetailsComponent]
})
export class HotelSkeletonComponent {

  @Input() gridType: string;
  @Input() filter: boolean;
  @Input() filterType: string;
  @Input() mapFilter: boolean;
  @Input() mapSide: string;
  @Input() list: boolean;
  @Input() grid: boolean;

}
