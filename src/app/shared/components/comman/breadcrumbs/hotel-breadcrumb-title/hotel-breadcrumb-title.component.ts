import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hotel-breadcrumb-title',
    templateUrl: './hotel-breadcrumb-title.component.html',
    styleUrl: './hotel-breadcrumb-title.component.scss',
    standalone: true,
    imports: [RouterLink, CurrencySymbolPipe]
})
export class HotelBreadcrumbTitleComponent {

  constructor(public hotelService: HotelService){}

}
