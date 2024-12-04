import { Component, Input } from '@angular/core';
import { testimonial } from '../../../../../shared/interface/hotel-classic';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonial-two',
    templateUrl: './testimonial-two.component.html',
    styleUrls: ['./testimonial-two.component.scss'],
    standalone: true,
    imports: [CarouselModule]
})
export class TestimonialTwoComponent {

  @Input() testimonial: testimonial[];

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
