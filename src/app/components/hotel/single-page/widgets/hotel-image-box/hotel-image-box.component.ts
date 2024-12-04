import { Component, Input } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { hotelGallery } from '../../../../../shared/interface/hotel';
import { SlicePipe } from '@angular/common';

@Component({
    selector: 'app-hotel-image-box',
    templateUrl: './hotel-image-box.component.html',
    styleUrls: ['./hotel-image-box.component.scss'],
    standalone: true,
    imports: [SlicePipe]
})
export class HotelImageBoxComponent {

  @Input() hotelGallery: hotelGallery[];

  public images: hotelGallery[];
  public items: GalleryItem[];

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  openLightBox(){
    this.images = [];
    this.hotelGallery.forEach((image) => {
      if(image.id <= 5){
        this.images.push(image)
      }
    })

    this.items = this.images.map((item) => new ImageItem({ src: item.image, thumb: item.image }));

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    this.lightbox.open()
    lightboxRef.load(this.items)
  }
}
