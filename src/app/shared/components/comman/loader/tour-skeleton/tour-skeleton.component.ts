import { Component, Input } from '@angular/core';
import { TourSkeletonDetailsComponent } from './tour-skeleton-details/tour-skeleton-details.component';
import { TourListSkeletonDetailsComponent } from './tour-list-skeleton-details/tour-list-skeleton-details.component';
import { HotelSkeletonFilterComponent } from '../hotel-skeleton/hotel-skeleton-filter/hotel-skeleton-filter.component';
import { GridSkeletonComponent } from '../skeleton-loader/grid-skeleton/grid-skeleton.component';

@Component({
    selector: 'app-tour-skeleton',
    templateUrl: './tour-skeleton.component.html',
    styleUrls: ['./tour-skeleton.component.scss'],
    standalone: true,
    imports: [GridSkeletonComponent, HotelSkeletonFilterComponent, TourListSkeletonDetailsComponent, TourSkeletonDetailsComponent]
})
export class TourSkeletonComponent {

  @Input() filter: boolean;
  @Input() gridType: string;
  @Input() filterType: string;
  @Input() list: boolean;


}
