import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-cab-information',
    templateUrl: './cab-information.component.html',
    styleUrl: './cab-information.component.scss',
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class CabInformationComponent {

  constructor(public hotelService: HotelService){}

}
