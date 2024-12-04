import { Component, Input } from '@angular/core';
import { gallery } from '../../../../../shared/interface/hotel-classic';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-gallery-one',
    templateUrl: './gallery-one.component.html',
    styleUrls: ['./gallery-one.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink]
})
export class GalleryOneComponent {

  @Input() gallery: gallery[];

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      586: {
        items: 2
      },
      991: {
        items: 3
      },
      1200: {
        items: 4
      }
    },
  };
}
