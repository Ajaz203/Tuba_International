import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-account-delete-modal',
    templateUrl: './account-delete-modal.component.html',
    styleUrl: './account-delete-modal.component.scss',
    standalone: true,
    imports: [FormsModule]
})
export class AccountDeleteModalComponent {

  constructor(private modal: NgbActiveModal){}

  closeModal(){
    this.modal.close();
  }
}
