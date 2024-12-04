import { Component } from '@angular/core';
import { HotelService } from '../../../../../../shared/services/hotel.service';
import { restaurants } from '../../../../../../shared/components/data/data/filter/restaurant';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CurrencySymbolPipe } from '../../../../../pipe/currency.pipe';

@Component({
    selector: 'app-restaurant-map-filer',
    templateUrl: './restaurant-map-filer.component.html',
    styleUrl: './restaurant-map-filer.component.scss',
    standalone: true,
    imports: [NgbRating, CurrencySymbolPipe]
})
export class RestaurantMapFilerComponent {

  public restaurants = restaurants;

  constructor(private config: NgbRatingConfig, public hotelService: HotelService) {
		this.config.max = 5;
		this.config.readonly = true;
	}

}
