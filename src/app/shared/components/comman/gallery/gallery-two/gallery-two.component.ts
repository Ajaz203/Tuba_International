import { Component, Input } from '@angular/core';
import { Gallery, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { images } from '../../../../../shared/interface/tour-modern';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageModalComponent } from '../../modal/image-modal/image-modal.component';

@Component({
    selector: 'app-gallery-two',
    templateUrl: './gallery-two.component.html',
    styleUrls: ['./gallery-two.component.scss'],
    standalone: true
})
export class GalleryTwoComponent {

  @Input() images: images[];

  constructor(public gallery: Gallery, public lightbox: Lightbox, private modal: NgbModal) {}

  ngOnInit() {
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }

  open(image: images){

    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    this.lightbox.open()
    lightboxRef.load([new ImageItem({src: image.url, thumb: image.url})])
  }

  openModal(img: images){
    const modalRef = this.modal.open(ImageModalComponent, {size: 'lg', centered: true})
    modalRef.componentInstance.data = img.url;
    modalRef.componentInstance.images = this.images
  }

}
