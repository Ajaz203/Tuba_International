import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tour-vector-banner',
    templateUrl: './tour-vector-banner.component.html',
    styleUrls: ['./tour-vector-banner.component.scss'],
    standalone: true,
    imports: [RouterLink, CurrencySymbolPipe]
})
export class TourVectorBannerComponent {

  constructor(public hotelService: HotelService){}

}
