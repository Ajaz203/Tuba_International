import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-flight-breadcrumb',
    templateUrl: './flight-breadcrumb.component.html',
    styleUrl: './flight-breadcrumb.component.scss',
    standalone: true
})
export class FlightBreadcrumbComponent {

  @Input() FlightDetails: boolean;
  @Input() bg_image: string;
  @Input() title: string;
  @Input() parent: string;
  @Input() child: string;
  
}
