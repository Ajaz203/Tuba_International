import { Component, Input } from '@angular/core';
import { airlines } from '../../../../../shared/interface/flight-modern';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-flight-left-sidebar-airline-details',
    templateUrl: './flight-left-sidebar-airline-details.component.html',
    styleUrls: ['./flight-left-sidebar-airline-details.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink]
})
export class FlightLeftSidebarAirlineDetailsComponent {

   @Input() airlines: airlines[];

   public options = {
    loop: false,
    nav: true,
    dots: false,
    margin: 30,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
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
        items: 4
      }
    }
   }

}
