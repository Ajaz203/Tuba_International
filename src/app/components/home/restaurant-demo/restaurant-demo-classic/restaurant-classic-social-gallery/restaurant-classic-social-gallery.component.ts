import { Component, Input } from '@angular/core';
import { socialGallery } from '../../../../../shared/interface/hotel-classic';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-restaurant-classic-social-gallery',
    templateUrl: './restaurant-classic-social-gallery.component.html',
    styleUrls: ['./restaurant-classic-social-gallery.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink]
})
export class RestaurantClassicSocialGalleryComponent {

  @Input() id: number[];
  @Input() socialGallery: socialGallery[];

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      575: {
        items: 3,
      },
      767: {
        items: 4,
      },
      999: {
        items: 5,
      },
      1199: {
        items: 6,
      },
    }
  };
}
