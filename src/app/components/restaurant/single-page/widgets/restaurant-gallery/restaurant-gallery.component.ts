import { Component, Input } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, GallerizeDirective } from 'ng-gallery/lightbox';
import { hotelGallery } from '../../../../../shared/interface/hotel';

@Component({
    selector: 'app-restaurant-gallery',
    templateUrl: './restaurant-gallery.component.html',
    styleUrl: './restaurant-gallery.component.scss',
    standalone: true,
    imports: [GallerizeDirective]
})
export class RestaurantGalleryComponent {

  @Input() restaurantGallery: hotelGallery[];

  public images: hotelGallery[];
  public items: GalleryItem[];

  constructor(public gallery: Gallery, public lightbox: Lightbox){}

  openLightBox(){
    this.images = [];
    this.restaurantGallery.forEach((image) => {
        this.images.push(image)
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
