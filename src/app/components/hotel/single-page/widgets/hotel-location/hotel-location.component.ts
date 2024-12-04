import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { hotelLocation } from '../../../../../shared/interface/hotel';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-hotel-location',
    templateUrl: './hotel-location.component.html',
    styleUrls: ['./hotel-location.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class HotelLocationComponent {

  @Input() hotelLocation: hotelLocation;
  @Input() type: string;

  constructor(public sanitizer: DomSanitizer) {}

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
