import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnquireModalComponent } from '../../../../../shared/components/comman/modal/enquire-modal/enquire-modal.component';

@Component({
    selector: 'app-hotel-single-page-modal',
    templateUrl: './hotel-single-page-modal.component.html',
    styleUrl: './hotel-single-page-modal.component.scss',
    standalone: true
})
export class HotelSinglePageModalComponent {

  constructor(private modal: NgbModal){}

  openEnquireModal(){
    this.modal.open(EnquireModalComponent, { size: 'lg', centered: true })
  }
}
