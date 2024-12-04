import { Component, Input } from '@angular/core';
import { restaurantDetail } from '../../../../../shared/interface/restaurant-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-restaurant-details',
    templateUrl: './restaurant-details.component.html',
    styleUrls: ['./restaurant-details.component.scss'],
    standalone: true,
    imports: [RouterLink, NgClass, CurrencySymbolPipe]
})
export class RestaurantDetailsComponent {

  @Input() restaurantDetails: restaurantDetail;

  constructor(public hotelService: HotelService){}

}
