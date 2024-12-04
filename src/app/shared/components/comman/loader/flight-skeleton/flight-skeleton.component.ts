import { Component } from '@angular/core';
import { dateSlider } from '../../../data/data/filter/flight';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-flight-skeleton',
    templateUrl: './flight-skeleton.component.html',
    styleUrl: './flight-skeleton.component.scss',
    standalone: true,
    imports: [FormsModule, CarouselModule]
})
export class FlightSkeletonComponent {

  public dateSlider = dateSlider;

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
        items: 7
      }
    }
  }
}
