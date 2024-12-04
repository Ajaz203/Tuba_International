import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hotel-skeleton-details',
    templateUrl: './hotel-skeleton-details.component.html',
    styleUrls: ['./hotel-skeleton-details.component.scss'],
    standalone: true
})
export class HotelSkeletonDetailsComponent {

  @Input() gridType: string;
  @Input() filter: boolean;
}
