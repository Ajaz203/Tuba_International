import { Component, Input } from '@angular/core';
import { hotelRooms } from '../../../../../shared/interface/hotel';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-hotel-rooms',
    templateUrl: './hotel-rooms.component.html',
    styleUrls: ['./hotel-rooms.component.scss'],
    standalone: true,
    imports: [NgClass, RouterLink, CurrencySymbolPipe]
})
export class HotelRoomsComponent {

  @Input() hotelRooms: hotelRooms[];
  @Input() type: string;

  constructor(public hotelService: HotelService){}

}
