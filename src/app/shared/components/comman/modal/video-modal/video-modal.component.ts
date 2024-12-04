import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-video-modal',
    templateUrl: './video-modal.component.html',
    styleUrls: ['./video-modal.component.scss'],
    standalone: true
})
export class VideoModalComponent {

  constructor(private modal: NgbModal){}

  closeModal(){
    this.modal.dismissAll();
  }
}
