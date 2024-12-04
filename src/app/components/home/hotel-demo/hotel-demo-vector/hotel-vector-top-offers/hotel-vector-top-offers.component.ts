import { Component, Input } from '@angular/core';
import { topOffers } from '../../../../../shared/interface/hotel-vector';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hotel-vector-top-offers',
    templateUrl: './hotel-vector-top-offers.component.html',
    styleUrls: ['./hotel-vector-top-offers.component.scss'],
    standalone: true,
    imports: [CarouselModule]
})
export class HotelVectorTopOffersComponent {

  @Input() topOffers: topOffers[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    mouseDrag: false,
    responsive: {
      0: {
        items: 1,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 1500,
      },
      456: {
        items: 2,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 1500,
      },
      668: {
        items: 3,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 1500,
      },
      768: {
        items: 4,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 1500,
      },
      1200: {
        items: 5,
        touchDrag: false,
      }
    }
  }
}
