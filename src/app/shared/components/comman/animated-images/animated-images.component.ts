import { Component, Input, Renderer2 } from '@angular/core';
import { animatedImage } from '../../../../shared/interface/cab-modern';

@Component({
    selector: 'app-animated-images',
    templateUrl: './animated-images.component.html',
    styleUrls: ['./animated-images.component.scss'],
    standalone: true
})
export class AnimatedImagesComponent {

  @Input() images: animatedImage[];
  @Input() type: string;
  @Input() classic: boolean;

constructor(private renderer: Renderer2) {}

  tilt(e: MouseEvent){
    const { top, bottom, left, right } = (e.target as HTMLElement).getBoundingClientRect();
    const middleX = right - left;
    const middleY = bottom - top;
    const clientX = e.clientX;
    const clientY = e.clientY;
    const offsetX = (clientX - middleX) / middleX;
    const offsetY = (middleY - clientY) / middleY;

    const transformValue = `perspective(1000px) rotateY(${offsetX * 3}deg) rotateX(${offsetY * 8}deg) scale3d(1, 1, 1)`;

    this.renderer.setStyle(e.target, 'transform', transformValue);
  }

  tiltOver(e: MouseEvent){
    this.renderer.setStyle(e.target, 'transform', 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)');
  }
}
