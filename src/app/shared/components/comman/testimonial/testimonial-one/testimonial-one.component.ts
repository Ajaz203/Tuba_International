import { Component, Input } from '@angular/core';
import { testimonial } from '../../../../../shared/interface/hotel-classic';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonial-one',
    templateUrl: './testimonial-one.component.html',
    styleUrls: ['./testimonial-one.component.scss'],
    standalone: true,
    imports: [CarouselModule]
})
export class TestimonialOneComponent {

  @Input() type: string;
  @Input() testimonial: testimonial[] = [];

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-arrow-left'></i>","<i class='fa fa-arrow-right'></i>",],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
