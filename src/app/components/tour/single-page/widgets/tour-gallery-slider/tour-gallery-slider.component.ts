import { Component } from '@angular/core';
import { tours } from '../../../../../shared/interface/tour';
import { TourService } from '../../../../../shared/services/tour.service';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-tour-gallery-slider',
    templateUrl: './tour-gallery-slider.component.html',
    styleUrl: './tour-gallery-slider.component.scss',
    standalone: true,
    imports: [CarouselModule, RouterLink]
})
export class TourGallerySliderComponent {

  public tourDetails : tours[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      767: {
        items: 3,
      },
      999: {
        items: 3,
      },
      1199: {
        items: 3,
      },
    }
  }

  constructor(public tourService: TourService){

    this.tourService.tour().subscribe(response => {
        this.tourDetails = response.tour;
      })
  }
}
