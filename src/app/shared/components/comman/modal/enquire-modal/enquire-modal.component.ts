import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-enquire-modal',
    templateUrl: './enquire-modal.component.html',
    styleUrl: './enquire-modal.component.scss',
    standalone: true,
    imports: [FormsModule]
})
export class EnquireModalComponent {

  constructor(private modal: NgbActiveModal){}

  closeModal(){
    this.modal.close();
  }
}
