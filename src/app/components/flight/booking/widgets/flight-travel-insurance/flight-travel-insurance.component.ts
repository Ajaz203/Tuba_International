import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-flight-travel-insurance',
    templateUrl: './flight-travel-insurance.component.html',
    styleUrl: './flight-travel-insurance.component.scss',
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class FlightTravelInsuranceComponent {

  constructor(public hotelService: HotelService){}

}
