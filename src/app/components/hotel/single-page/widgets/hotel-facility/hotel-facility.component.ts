import { Component, Input } from '@angular/core';
import { hotelFacility } from '../../../../../shared/interface/hotel';

@Component({
    selector: 'app-hotel-facility',
    templateUrl: './hotel-facility.component.html',
    styleUrls: ['./hotel-facility.component.scss'],
    standalone: true
})
export class HotelFacilityComponent {

  @Input() hotelFacility: hotelFacility[];
  @Input() type: string;

}
