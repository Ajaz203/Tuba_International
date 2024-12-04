import { Component, Input } from '@angular/core';
import { gallery } from '../../../../../shared/interface/hotel-classic';
import { GalleryComponent } from '../../../../../shared/components/comman/gallery/gallery.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-hotel-classic-gallery',
    templateUrl: './hotel-classic-gallery.component.html',
    styleUrls: ['./hotel-classic-gallery.component.scss'],
    standalone: true,
    imports: [TitleComponent, GalleryComponent]
})
export class HotelClassicGalleryComponent {

  @Input() gallery: gallery[];
  @Input() sectionClass: boolean = true;
}
