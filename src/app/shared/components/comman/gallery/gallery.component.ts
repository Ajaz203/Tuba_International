import { Component, Input } from '@angular/core';
import { gallery } from '../../../../shared/interface/hotel-classic';
import { images } from '../../../../shared/interface/tour-modern';
import { GalleryTwoComponent } from './gallery-two/gallery-two.component';
import { GalleryOneComponent } from './gallery-one/gallery-one.component';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    standalone: true,
    imports: [GalleryOneComponent, GalleryTwoComponent]
})
export class GalleryComponent {

  @Input() type: string;
  @Input() gallery: gallery[];
  @Input() images: images[];

}
