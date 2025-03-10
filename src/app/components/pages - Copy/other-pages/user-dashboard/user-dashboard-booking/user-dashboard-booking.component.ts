import { Component, Input } from '@angular/core';
import { booking } from '../../../../../shared/interface/pages';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { NgClass, NgStyle } from '@angular/common';

@Component({
    selector: 'app-user-dashboard-booking',
    templateUrl: './user-dashboard-booking.component.html',
    styleUrl: './user-dashboard-booking.component.scss',
    standalone: true,
    imports: [NgClass, NgStyle, CurrencySymbolPipe]
})
export class UserDashboardBookingComponent {

  @Input() booking: booking[];

  constructor(public hotelService: HotelService){}

}
