import { Component, Input } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { category } from '../../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-category-one',
    templateUrl: './category-one.component.html',
    styleUrls: ['./category-one.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink, CurrencySymbolPipe]
})
export class CategoryOneComponent {

  @Input() category: category[];

  public options: OwlOptions = {
    loop: true,
    nav: true,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2,
      },
      999: {
        items: 3,
      }
    }
  }

  constructor(public hotelService: HotelService){}
}
