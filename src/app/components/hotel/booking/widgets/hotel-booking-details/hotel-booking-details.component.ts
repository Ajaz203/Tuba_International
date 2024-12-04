import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-hotel-booking-details',
    templateUrl: './hotel-booking-details.component.html',
    styleUrls: ['./hotel-booking-details.component.scss'],
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class HotelBookingDetailsComponent {

  constructor(public hotelService: HotelService){}

}
