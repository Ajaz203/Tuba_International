import { Component } from '@angular/core';
import { HotelService } from '../../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-hotel-single-page-filter-price',
    templateUrl: './hotel-single-page-filter-price.component.html',
    styleUrls: ['./hotel-single-page-filter-price.component.scss'],
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class HotelSinglePageFilterPriceComponent {

  constructor(public hotelService: HotelService){}

}
