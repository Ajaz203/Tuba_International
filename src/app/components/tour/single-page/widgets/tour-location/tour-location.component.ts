import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { hotelLocation } from '../../../../../shared/interface/hotel';

@Component({
    selector: 'app-tour-location',
    templateUrl: './tour-location.component.html',
    styleUrl: './tour-location.component.scss',
    standalone: true
})
export class TourLocationComponent {

  @Input() location: hotelLocation;

  constructor(public sanitizer: DomSanitizer) {}

  safe(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
