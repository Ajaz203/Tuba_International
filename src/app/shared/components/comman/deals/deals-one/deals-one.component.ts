import { Component, Input } from '@angular/core';
import { deal } from '../../../../../shared/interface/tour-trending';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { NgClass } from '@angular/common';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-deals-one',
    templateUrl: './deals-one.component.html',
    styleUrls: ['./deals-one.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink, NgbRating, NgClass, CurrencySymbolPipe]
})
export class DealsOneComponent {

  @Input() deals: deal[];
  @Input() text: boolean = false;

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2
      },
      999: {
        items: 3
      }
    },
  };

  constructor(public hotelService: HotelService){}

}
