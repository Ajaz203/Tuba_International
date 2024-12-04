import { Component, Input } from '@angular/core';
import { themes } from '../../../../../shared/interface/tour-trending';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-tour-trending-explore-themes',
    templateUrl: './tour-trending-explore-themes.component.html',
    styleUrls: ['./tour-trending-explore-themes.component.scss'],
    standalone: true,
    imports: [TitleComponent, CarouselModule, CurrencySymbolPipe]
})
export class TourTrendingExploreThemesComponent {

  @Input() themes: themes[];

   public options = {
    loop: false,
    nav: false,
    dots: false,
    margin: 40,
    responsive: {
      0: {
        items: 1
      },
      530: {
        items: 2
      },
      950: {
        items: 3
      },
      999: {
        items: 4
      }
    }
  }

  constructor(public hotelService: HotelService){}

}
