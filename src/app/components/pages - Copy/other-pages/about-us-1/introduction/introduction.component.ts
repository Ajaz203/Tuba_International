import { Component, Input } from '@angular/core';
import { animatedImage } from '../../../../../shared/interface/cab-modern';
import { AnimatedImagesComponent } from '../../../../../shared/components/comman/animated-images/animated-images.component';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-introduction',
    templateUrl: './introduction.component.html',
    styleUrl: './introduction.component.scss',
    standalone: true,
    imports: [AnimatedImagesComponent,RouterModule]
})
export class IntroductionComponent {

  @Input() gallery: animatedImage[];
  @Input() classic: boolean = false;

}
