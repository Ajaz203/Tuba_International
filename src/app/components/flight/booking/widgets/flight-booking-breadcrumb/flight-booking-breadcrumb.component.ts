import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-flight-booking-breadcrumb',
    templateUrl: './flight-booking-breadcrumb.component.html',
    styleUrl: './flight-booking-breadcrumb.component.scss',
    standalone: true
})
export class FlightBookingBreadcrumbComponent {

  @Input() bg_image: string;
  @Input() parent: string;
  @Input() subParent: string;
  @Input() child: string;
}
