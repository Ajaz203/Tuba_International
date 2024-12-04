import { Component, Input } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { category } from '../../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-category-four',
    templateUrl: './category-four.component.html',
    styleUrls: ['./category-four.component.scss'],
    standalone: true,
    imports: [CarouselModule, NgbRating, CurrencySymbolPipe]
})
export class CategoryFourComponent {

  @Input() category: category[];

  public options = {
    loop: false,
    nav: false,
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1
      },
      550: {
        items: 2
      },
      949: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
   }

   constructor(private config: NgbRatingConfig, public hotelService: HotelService) {
		this.config.max = 5;
		this.config.readonly = true;
	}
}
