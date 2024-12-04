import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hotel-title-section',
    templateUrl: './hotel-title-section.component.html',
    styleUrls: ['./hotel-title-section.component.scss'],
    standalone: true,
    imports: [RouterLink, CurrencySymbolPipe]
})
export class HotelTitleSectionComponent {

  constructor(public hotelService: HotelService){}

}
