import { Component, Input } from '@angular/core';
import { animatedImage } from '../../../../../shared/interface/cab-modern';
import { AnimatedImagesComponent } from '../../../../../shared/components/comman/animated-images/animated-images.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-hotel-classic-about-hotel',
    templateUrl: './hotel-classic-about-hotel.component.html',
    styleUrls: ['./hotel-classic-about-hotel.component.scss'],
    standalone: true,
    imports: [TitleComponent, AnimatedImagesComponent]
})
export class HotelClassicAboutHotelComponent {

  @Input() hotelImages: animatedImage[];

}
