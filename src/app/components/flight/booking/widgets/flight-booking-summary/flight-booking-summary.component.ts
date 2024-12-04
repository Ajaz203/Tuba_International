import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-flight-booking-summary',
    templateUrl: './flight-booking-summary.component.html',
    styleUrl: './flight-booking-summary.component.scss',
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class FlightBookingSummaryComponent {

  constructor(public hotelService: HotelService){}

}
