import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-flight-modern-banner',
    templateUrl: './flight-modern-banner.component.html',
    styleUrls: ['./flight-modern-banner.component.scss'],
    standalone: true,
    imports: [RouterLink, CurrencySymbolPipe]
})
export class FlightModernBannerComponent {

  constructor(public hotelService: HotelService){}

}
