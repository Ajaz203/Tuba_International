import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-cab-booking-summary',
    templateUrl: './cab-booking-summary.component.html',
    styleUrl: './cab-booking-summary.component.scss',
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class CabBookingSummaryComponent {

  constructor(public hotelService: HotelService){}

}
