import { Component, Input } from '@angular/core';
import { HotelSinglePageSkeletonDetailsComponent } from './hotel-single-page-skeleton-details/hotel-single-page-skeleton-details.component';
import { HotelSinglePageSkeletonFilterComponent } from './hotel-single-page-skeleton-filter/hotel-single-page-skeleton-filter.component';

@Component({
    selector: 'app-hotel-single-page-skeleton',
    templateUrl: './hotel-single-page-skeleton.component.html',
    styleUrls: ['./hotel-single-page-skeleton.component.scss'],
    standalone: true,
    imports: [HotelSinglePageSkeletonFilterComponent, HotelSinglePageSkeletonDetailsComponent]
})
export class HotelSinglePageSkeletonComponent {

  @Input() skeletonType: string;
  @Input() withOutTopPage: boolean;
@Input() breadcrumbSection: boolean;
  @Input() filterType: string;
}
