import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationComponent } from '../../animation/animation.component';

@Component({
    selector: 'app-tour-breadcrumb',
    templateUrl: './tour-breadcrumb.component.html',
    styleUrl: './tour-breadcrumb.component.scss',
    standalone: true,
    imports: [AnimationComponent]
})
export class TourBreadcrumbComponent {

  @Input() bg_image: string;
  @Input() title: string;
  @Input() parent: string;
  @Input() child: string;
  
}
