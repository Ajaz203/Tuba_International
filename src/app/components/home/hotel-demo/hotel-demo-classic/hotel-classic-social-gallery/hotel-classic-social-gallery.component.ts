import { Component, Input } from '@angular/core';
import { socialGallery } from '../../../../../shared/interface/hotel-classic';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hotel-classic-social-gallery',
    templateUrl: './hotel-classic-social-gallery.component.html',
    styleUrls: ['./hotel-classic-social-gallery.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink]
})
export class HotelClassicSocialGalleryComponent {

  @Input() id: number[];
  @Input() socialGallery: socialGallery[];
  @Input() title: boolean = false;
  @Input() sectionClass: boolean = true;

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3
      },
      768: {
        items: 4
      },
      1024: {
        items: 5
      },
      1367: {
        items: 6
      }
    },
  };
}
