import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from '../../../../../shared/components/comman/modal/video-modal/video-modal.component';

@Component({
    selector: 'app-hotel-classic-video',
    templateUrl: './hotel-classic-video.component.html',
    styleUrls: ['./hotel-classic-video.component.scss'],
    standalone: true
})
export class HotelClassicVideoComponent {

  constructor(private modal: NgbModal){}

  openModal(){
    this.modal.open(VideoModalComponent, { size: "lg", centered: true })
  }
}
