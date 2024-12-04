import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit-email-modal',
    templateUrl: './edit-email-modal.component.html',
    styleUrl: './edit-email-modal.component.scss',
    standalone: true,
    imports: [FormsModule]
})
export class EditEmailModalComponent {

  constructor(private modal: NgbActiveModal){}

  closeModal(){
    this.modal.close();
  }
}
