import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-tour-booking-details',
    templateUrl: './tour-booking-details.component.html',
    styleUrl: './tour-booking-details.component.scss',
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class TourBookingDetailsComponent {

  constructor(public hotelService: HotelService){}

}
