import { Component, Input } from '@angular/core';
import { hotels } from '../../../../../../shared/interface/hotel';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hotel-list-images',
    templateUrl: './hotel-list-images.component.html',
    styleUrls: ['./hotel-list-images.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink]
})
export class HotelListImagesComponent {

  @Input() images: hotels;
  @Input() imageSlider: boolean;
  @Input() thumbnailImages: boolean;
  @Input() thumbnailVideo: boolean;

  public selectedImage: string;

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
        items: 1
      }
    }
  }

  public thumbnailCarouselOptions = {
    items: 4,
    margin: 10,
    center: true,
    loop: false,
    nav: false,
    dots: false,
  };

  changeImage(image: string) {
    this.selectedImage = image;
  }
}
