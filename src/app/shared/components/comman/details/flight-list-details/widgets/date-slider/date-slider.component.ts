import { Component } from '@angular/core';
import { dateSlider } from '../../../../../../../shared/components/data/data/filter/flight';
import { HotelService } from '../../../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../../pipe/currency.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-date-slider',
    templateUrl: './date-slider.component.html',
    styleUrl: './date-slider.component.scss',
    standalone: true,
    imports: [CarouselModule, CurrencySymbolPipe]
})
export class DateSliderComponent {

  public dateSlider = dateSlider;

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      500: {
        items: 4
      },
      668: {
        items: 5
      },
      999: {
        items: 7
      }
    }
  }

  constructor(public hotelService: HotelService){}

}
