import { Component, Input } from '@angular/core';
import { AnimationBirdComponent } from './animation-bird/animation-bird.component';
import { AnimationDotsComponent } from './animation-dots/animation-dots.component';

@Component({
    selector: 'app-animations',
    templateUrl: './animation.component.html',
    styleUrls: ['./animation.component.scss'],
    standalone: true,
    imports: [AnimationDotsComponent, AnimationBirdComponent]
})
export class AnimationComponent {

  @Input() type: string;

}
