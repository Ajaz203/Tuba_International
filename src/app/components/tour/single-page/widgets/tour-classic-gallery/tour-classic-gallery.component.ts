import { Component, Input } from '@angular/core';
import { tourClassicGallery } from '../../../../../shared/interface/tour';

@Component({
    selector: 'app-tour-classic-gallery',
    templateUrl: './tour-classic-gallery.component.html',
    styleUrl: './tour-classic-gallery.component.scss',
    standalone: true
})
export class TourClassicGalleryComponent {

  @Input() classicGallery: tourClassicGallery[];

}
