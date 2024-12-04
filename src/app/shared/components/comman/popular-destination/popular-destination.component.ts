import { Component, Input } from '@angular/core';
import { popularDestination } from '../../../../shared/interface/hotel-vector';
import { exploreTheme } from '../../../../shared/interface/tour-vector';
import { HotelService } from '../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../pipe/currency.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-popular-destination',
    templateUrl: './popular-destination.component.html',
    styleUrls: ['./popular-destination.component.scss'],
    standalone: true,
    imports: [CarouselModule, CurrencySymbolPipe]
})
export class PopularDestinationComponent {

  @Input() popularDestination: popularDestination[];
  @Input() themes: exploreTheme[];

   public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    mouseDrag: false,
    responsive: {
      0: {
        items: 2,
        mouseDrag: true,
      },
      456: {
        items: 3,
        mouseDrag: true,
      },
      668: {
        items: 4,
        mouseDrag: true,
      },
      935: {
        items: 5,
        mouseDrag: true,
      },
      1200: {
        items: 6,
        touchDrag: false,
      }
    }
  }

  constructor(public hotelService: HotelService){}

}
