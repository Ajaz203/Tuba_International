import { Component, Input } from '@angular/core';
import { animatedImage } from '../../../../../shared/interface/cab-modern';
import { AnimatedImagesComponent } from '../../../../../shared/components/comman/animated-images/animated-images.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-mix-classic-hotel',
    templateUrl: './mix-classic-hotel.component.html',
    styleUrls: ['./mix-classic-hotel.component.scss'],
    standalone: true,
    imports: [TitleComponent, AnimatedImagesComponent]
})
export class MixClassicHotelComponent {

  @Input() hotelImages: animatedImage[];

}
