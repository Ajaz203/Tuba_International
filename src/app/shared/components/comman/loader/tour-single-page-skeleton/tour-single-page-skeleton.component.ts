import { Component, Input } from '@angular/core';
import { TourSinglePageSkeletonFilterComponent } from './tour-single-page-skeleton-filter/tour-single-page-skeleton-filter.component';

@Component({
    selector: 'app-tour-single-page-skeleton',
    templateUrl: './tour-single-page-skeleton.component.html',
    styleUrl: './tour-single-page-skeleton.component.scss',
    standalone: true,
    imports: [TourSinglePageSkeletonFilterComponent]
})
export class TourSinglePageSkeletonComponent {

  @Input() filterType: string;

}
