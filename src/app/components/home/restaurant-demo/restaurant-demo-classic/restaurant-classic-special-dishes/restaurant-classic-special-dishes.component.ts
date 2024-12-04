import { Component, Input } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { category } from '../../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-restaurant-classic-special-dishes',
    templateUrl: './restaurant-classic-special-dishes.component.html',
    styleUrls: ['./restaurant-classic-special-dishes.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink, NgbRating, CurrencySymbolPipe]
})
export class RestaurantClassicSpecialDishesComponent {

  @Input() id: number[];
  @Input() dishes: category[];
  @Input() rounded: boolean = true;

  public options = {
    loop: true,
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
    }
   }

   constructor(private config: NgbRatingConfig, public hotelService: HotelService) {
		this.config.max = 5;
		this.config.readonly = true;
	}

  ngOnChanges(){
    if (Array.isArray(this.id)) {
      this.dishes = this.dishes?.filter((item) => {
        return this.id.includes(item.id)
      })
    }
  }
}
