import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-banner-one',
    templateUrl: './banner-one.component.html',
    styleUrls: ['./banner-one.component.scss'],
    standalone: true,
    imports: [RouterLink, CurrencySymbolPipe]
})
export class BannerOneComponent {

  constructor(public hotelService: HotelService){}

}
