import { Component, Input } from '@angular/core';
import { topDestination } from '../../../../../shared/interface/flight-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-flight-modern-top-destination',
    templateUrl: './flight-modern-top-destination.component.html',
    styleUrls: ['./flight-modern-top-destination.component.scss'],
    standalone: true,
    imports: [TitleComponent, CarouselModule, RouterLink, CurrencySymbolPipe]
})
export class FlightModernTopDestinationComponent {

  @Input() topDestination: topDestination[];

  public description = "Explore the top destinations around the world—experience the beauty, culture, and adventure that await you!";

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    autoplay: true,
    autoplayTimeOut: 700,
    responsive: {
      0: {
        items: 1
      },
      456: {
        items: 2
      },
      668: {
        items: 3
      },
      960: {
        items: 4
      },
      999: {
        items: 5
      }
    }
  }

  constructor(public hotelService: HotelService){}

}
