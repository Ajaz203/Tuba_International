import { Component, Input } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { hotels } from '../../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-hotel-minimal-top-deals',
    templateUrl: './hotel-minimal-top-deals.component.html',
    styleUrls: ['./hotel-minimal-top-deals.component.scss'],
    standalone: true,
    imports: [TitleComponent, RouterLink, NgbRating, CurrencySymbolPipe]
})
export class HotelMinimalTopDealsComponent {

  @Input() hotels: hotels[];

  constructor(private config: NgbRatingConfig, public hotelService: HotelService) {
		this.config.max = 5;
		this.config.readonly = true;
	}
}
