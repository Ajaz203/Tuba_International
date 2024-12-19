import { Component, Input } from '@angular/core';
import { destination } from '../../../../../shared/interface/flight-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-flight-modern-destination',
    templateUrl: './flight-modern-destination.component.html',
    styleUrls: ['./flight-modern-destination.component.scss'],
    standalone: true,
    imports: [TitleComponent, CarouselModule, RouterLink, CurrencySymbolPipe]
})
export class FlightModernDestinationComponent {

  @Input() destination: destination[];

  public description = "Your journey to romance begins here—our special couple's dinner offer transforms moments into memories at the featured destination for luxury and hospitality.";

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 60,
    responsive: {
      0: {
        items: 1
      },
      668: {
        items: 2
      },
      999: {
        items: 3
      }
    }
  }

  constructor(public hotelService: HotelService){}

}
