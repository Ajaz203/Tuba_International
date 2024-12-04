import { Component, Input } from '@angular/core';
import { hotelPolicy } from '../../../../../shared/interface/hotel';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-hotel-policy',
    templateUrl: './hotel-policy.component.html',
    styleUrls: ['./hotel-policy.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class HotelPolicyComponent {

  @Input() hotelPolicy: hotelPolicy[];
  @Input() type: string;

}
