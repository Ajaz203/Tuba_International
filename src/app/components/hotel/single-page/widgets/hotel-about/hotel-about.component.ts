import { Component, Input } from '@angular/core';
import { hotelAbout } from '../../../../../shared/interface/hotel';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-hotel-about',
    templateUrl: './hotel-about.component.html',
    styleUrls: ['./hotel-about.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class HotelAboutComponent {

  @Input() hotelAbout: hotelAbout[];
  @Input() type: string;

}
