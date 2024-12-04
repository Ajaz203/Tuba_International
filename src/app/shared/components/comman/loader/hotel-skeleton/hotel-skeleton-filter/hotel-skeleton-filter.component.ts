import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hotel-skeleton-filter',
    templateUrl: './hotel-skeleton-filter.component.html',
    styleUrls: ['./hotel-skeleton-filter.component.scss'],
    standalone: true
})
export class HotelSkeletonFilterComponent {

  @Input() filter: boolean;

}
