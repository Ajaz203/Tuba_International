import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { hotelLocation } from '../../../../../shared/interface/hotel';

@Component({
    selector: 'app-restaurant-location',
    templateUrl: './restaurant-location.component.html',
    styleUrl: './restaurant-location.component.scss',
    standalone: true
})
export class RestaurantLocationComponent {

  @Input() restaurantLocation: hotelLocation;

  constructor(public sanitizer: DomSanitizer) {}

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
