import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit-phone-modal',
    templateUrl: './edit-phone-modal.component.html',
    styleUrl: './edit-phone-modal.component.scss',
    standalone: true,
    imports: [FormsModule]
})
export class EditPhoneModalComponent {

  constructor(private modal: NgbActiveModal){}

  closeModal(){
    this.modal.close();
  }
}
