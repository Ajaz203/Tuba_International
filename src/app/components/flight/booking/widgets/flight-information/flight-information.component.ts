import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-flight-information',
    templateUrl: './flight-information.component.html',
    styleUrl: './flight-information.component.scss',
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class FlightInformationComponent {

  constructor(public hotelService: HotelService){}

}
