import { Component } from '@angular/core';
import { NgbActiveModal, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-user-profile-edit-modal',
    templateUrl: './user-profile-edit-modal.component.html',
    styleUrl: './user-profile-edit-modal.component.scss',
    standalone: true,
    imports: [FormsModule, NgbInputDatepicker]
})
export class UserProfileEditModalComponent {

  constructor(private modal: NgbActiveModal){}

  closeModal(){
    this.modal.close();
  }
}
