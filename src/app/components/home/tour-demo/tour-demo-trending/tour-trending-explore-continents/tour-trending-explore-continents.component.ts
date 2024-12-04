import { Component, Input } from '@angular/core';
import { continents } from '../../../../../shared/interface/tour-trending';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-tour-trending-explore-continents',
    templateUrl: './tour-trending-explore-continents.component.html',
    styleUrls: ['./tour-trending-explore-continents.component.scss'],
    standalone: true,
    imports: [TitleComponent, CarouselModule, CurrencySymbolPipe]
})
export class TourTrendingExploreContinentsComponent {

  @Input() continents: continents[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 40,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      668: {
        items: 3
      }
    }
  }

  constructor(public hotelService: HotelService){}

}
