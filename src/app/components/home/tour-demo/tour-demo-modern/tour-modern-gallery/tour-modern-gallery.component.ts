import { Component, Input } from '@angular/core';
import { tourGallery } from '../../../../../shared/interface/tour-modern';
import { GalleryComponent } from '../../../../../shared/components/comman/gallery/gallery.component';

@Component({
    selector: 'app-tour-modern-gallery',
    templateUrl: './tour-modern-gallery.component.html',
    styleUrls: ['./tour-modern-gallery.component.scss'],
    standalone: true,
    imports: [GalleryComponent]
})
export class TourModernGalleryComponent {

  @Input() gallery: tourGallery[];
  @Input() title: boolean = false;
  @Input() sectionClass: boolean = false;
  
}
