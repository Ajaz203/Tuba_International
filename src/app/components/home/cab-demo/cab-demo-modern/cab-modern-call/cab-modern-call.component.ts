import { Component, Input } from '@angular/core';
import { animatedImage } from '../../../../../shared/interface/cab-modern';
import { RouterLink } from '@angular/router';
import { AnimatedImagesComponent } from '../../../../../shared/components/comman/animated-images/animated-images.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';
import { AnimationComponent } from '../../../../../shared/components/comman/animation/animation.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-cab-modern-call',
    templateUrl: './cab-modern-call.component.html',
    styleUrls: ['./cab-modern-call.component.scss'],
    standalone: true,
    imports: [NgClass, AnimationComponent, TitleComponent, AnimatedImagesComponent, RouterLink]
})
export class CabModernCallComponent {

  @Input() images: animatedImage[];
  @Input() animation: boolean = true;
  @Input() titleType: string = 'simple';
  @Input() sectionClass: boolean = true;
  
}
