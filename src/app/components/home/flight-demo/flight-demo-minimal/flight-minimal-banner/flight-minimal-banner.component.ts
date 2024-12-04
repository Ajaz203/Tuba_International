import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-flight-minimal-banner',
    templateUrl: './flight-minimal-banner.component.html',
    styleUrls: ['./flight-minimal-banner.component.scss'],
    standalone: true,
    imports: [RouterLink, CurrencySymbolPipe]
})
export class FlightMinimalBannerComponent {

  constructor(public hotelService: HotelService){}

}
