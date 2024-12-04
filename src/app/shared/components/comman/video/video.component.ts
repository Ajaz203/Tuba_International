import { Component, Input } from '@angular/core';
import { VideoOneComponent } from './video-one/video-one.component';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
    standalone: true,
    imports: [VideoOneComponent]
})
export class VideoComponent {

  @Input() type: string;

}
