import { Component } from '@angular/core';
import { flightAdditionalLuggage } from '../../../../../shared/components/data/data/filter/flight';
import { additionalLuggage } from '../../../../../shared/interface/flight';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-flight-additional-luggage',
    templateUrl: './flight-additional-luggage.component.html',
    styleUrl: './flight-additional-luggage.component.scss',
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class FlightAdditionalLuggageComponent {

  public flightAdditionalLuggage: additionalLuggage[] = flightAdditionalLuggage;

  constructor(public hotelService: HotelService){}

}
