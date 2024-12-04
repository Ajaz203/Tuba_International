import { Component, Input } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, GallerizeDirective } from 'ng-gallery/lightbox';
import { cabGallery } from '../../../../../shared/interface/cab';
import { CabService } from '../../../../../shared/services/cab.service';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-cab-gallery',
    templateUrl: './cab-gallery.component.html',
    styleUrl: './cab-gallery.component.scss',
    standalone: true,
    imports: [CarouselModule, GallerizeDirective]
})
export class CabGalleryComponent {

  @Input() cabGallery: cabGallery[];

  public images: cabGallery[];
  public items: GalleryItem[];

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

  constructor(public gallery: Gallery, public lightbox: Lightbox){}

  openLightBox(){
    this.images = [];
    this.cabGallery.forEach((image) => {
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
