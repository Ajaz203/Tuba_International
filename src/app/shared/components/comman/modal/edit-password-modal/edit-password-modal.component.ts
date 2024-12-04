import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-edit-password-modal',
    templateUrl: './edit-password-modal.component.html',
    styleUrl: './edit-password-modal.component.scss',
    standalone: true,
    imports: [FormsModule]
})
export class EditPasswordModalComponent {

  constructor(private modal: NgbActiveModal){}

  closeModal(){
    this.modal.close();
  }
}

