import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-flight-round-trip-booking-details',
    templateUrl: './flight-round-trip-booking-details.component.html',
    styleUrl: './flight-round-trip-booking-details.component.scss',
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class FlightRoundTripBookingDetailsComponent {

  constructor(public hotelService: HotelService){}

}
