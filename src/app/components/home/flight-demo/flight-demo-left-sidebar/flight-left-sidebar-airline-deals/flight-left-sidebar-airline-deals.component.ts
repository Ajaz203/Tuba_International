import { Component, Input } from '@angular/core';
import { airlinesDeal } from '../../../../../shared/interface/flight-left-sidebar';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-flight-left-sidebar-airline-deals',
    templateUrl: './flight-left-sidebar-airline-deals.component.html',
    styleUrls: ['./flight-left-sidebar-airline-deals.component.scss'],
    standalone: true,
    imports: [CarouselModule, CurrencySymbolPipe]
})
export class FlightLeftSidebarAirlineDealsComponent {

  @Input() deals: airlinesDeal[];

  public options = {
    loop: true,
    nav: true,
    dots: false,
    margin: 30,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 1500,
    responsive: {
      0: {
        items: 1
      },
      550: {
        items: 2
      },
      949: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
   }

   constructor(public hotelService: HotelService){}

}
