import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { images } from '../../../../../shared/interface/tour-modern';

@Component({
    selector: 'app-image-modal',
    templateUrl: './image-modal.component.html',
    styleUrls: ['./image-modal.component.scss'],
    standalone: true
})
export class ImageModalComponent {

  @Input() data: string = '';
  @Input() images: images[];

  constructor(private modal: NgbModal){}

  closeModal(){
    this.modal.dismissAll();
  }

  selectedImage(i: string){
    this.data = i
  }
}
