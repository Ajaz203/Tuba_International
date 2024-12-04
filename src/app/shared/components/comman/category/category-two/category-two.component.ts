import { Component, Input } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { category } from '../../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-category-two',
    templateUrl: './category-two.component.html',
    styleUrls: ['./category-two.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink, CurrencySymbolPipe]
})
export class CategoryTwoComponent {

  @Input() package: category[];

  public options: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      892: {
        items: 2,
      }
    }
  }

  constructor(public hotelService: HotelService){}
}
