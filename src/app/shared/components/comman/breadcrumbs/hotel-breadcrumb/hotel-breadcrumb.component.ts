import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hotel-breadcrumb',
    templateUrl: './hotel-breadcrumb.component.html',
    styleUrls: ['./hotel-breadcrumb.component.scss'],
    standalone: true
})
export class HotelBreadcrumbComponent {

  @Input() bg_image: string;
  @Input() title: string;
  @Input() parent: string;
  @Input() subParent: string;
  @Input() child: string;
  @Input() tourBreadcrumb: boolean;
  
}
