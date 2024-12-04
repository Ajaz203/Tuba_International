import { Component } from '@angular/core';
import { HotelSinglePageFilterWeatherComponent } from './hotel-single-page-filter-weather/hotel-single-page-filter-weather.component';
import { HotelSinglePageFilterContactComponent } from './hotel-single-page-filter-contact/hotel-single-page-filter-contact.component';
import { HotelSinglePageFilterBookingComponent } from './hotel-single-page-filter-booking/hotel-single-page-filter-booking.component';
import { HotelSinglePageFilterPriceComponent } from './hotel-single-page-filter-price/hotel-single-page-filter-price.component';

@Component({
    selector: 'app-hotel-single-page-filter',
    templateUrl: './hotel-single-page-filter.component.html',
    styleUrls: ['./hotel-single-page-filter.component.scss'],
    standalone: true,
    imports: [HotelSinglePageFilterPriceComponent, HotelSinglePageFilterBookingComponent, HotelSinglePageFilterContactComponent, HotelSinglePageFilterWeatherComponent]
})
export class HotelSinglePageFilterComponent {

}
