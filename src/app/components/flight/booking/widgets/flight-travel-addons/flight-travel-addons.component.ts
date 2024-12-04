import { Component, Input } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-flight-travel-addons',
    templateUrl: './flight-travel-addons.component.html',
    styleUrl: './flight-travel-addons.component.scss',
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class FlightTravelAddonsComponent {

  @Input() title: string;

  constructor(public hotelService: HotelService){}

}
