import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnquireModalComponent } from '../../../../../shared/components/comman/modal/enquire-modal/enquire-modal.component';
import { TourBookingModalComponent } from '../../../../../shared/components/comman/modal/tour-booking-modal/tour-booking-modal.component';

@Component({
    selector: 'app-tour-single-page-modal',
    templateUrl: './tour-single-page-modal.component.html',
    styleUrl: './tour-single-page-modal.component.scss',
    standalone: true
})
export class TourSinglePageModalComponent {

  constructor(private modal: NgbModal){}

  openBookingModal(){
    this.modal.open(TourBookingModalComponent, { size: 'lg', centered: true })
  }
  openEnquireModal(){
    this.modal.open(EnquireModalComponent, { size: 'lg', centered: true })
  }
}
