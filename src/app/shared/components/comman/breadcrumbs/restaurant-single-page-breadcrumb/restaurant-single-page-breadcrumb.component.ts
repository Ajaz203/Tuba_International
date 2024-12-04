import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';

@Component({
    selector: 'app-restaurant-single-page-breadcrumb',
    templateUrl: './restaurant-single-page-breadcrumb.component.html',
    styleUrl: './restaurant-single-page-breadcrumb.component.scss',
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class RestaurantSinglePageBreadcrumbComponent {

  constructor(public hotelService: HotelService){}

}
