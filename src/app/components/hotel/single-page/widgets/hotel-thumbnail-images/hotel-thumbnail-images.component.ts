import { Component, Input } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, GalleryComponent } from 'ng-gallery';
import { hotelGallery } from '../../../../../shared/interface/hotel';

@Component({
    selector: 'app-hotel-thumbnail-images',
    templateUrl: './hotel-thumbnail-images.component.html',
    styleUrls: ['./hotel-thumbnail-images.component.scss'],
    standalone: true,
    imports: [GalleryComponent]
})
export class HotelThumbnailImagesComponent {

  @Input() hotelGallery: hotelGallery[];

  public images: hotelGallery[];
  public items: GalleryItem[];

  constructor(public gallery: Gallery) {}

  ngOnInit(){

  this.images = [];
    this.hotelGallery.forEach((image) => {
        this.images.push(image)
    })

    this.items = this.images.map((item) => new ImageItem({ src: item.image, thumb: item.image }));
  }
}
