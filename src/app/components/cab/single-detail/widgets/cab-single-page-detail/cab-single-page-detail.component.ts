import { Component, Input } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { cabDetail } from '../../../../../shared/interface/cab';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';

@Component({
    selector: 'app-cab-single-page-detail',
    templateUrl: './cab-single-page-detail.component.html',
    styleUrl: './cab-single-page-detail.component.scss',
    standalone: true,
    imports: [CurrencySymbolPipe]
})
export class CabSinglePageDetailComponent {

  @Input() cabDetails: cabDetail[];

  constructor(public hotelService: HotelService){}

}
