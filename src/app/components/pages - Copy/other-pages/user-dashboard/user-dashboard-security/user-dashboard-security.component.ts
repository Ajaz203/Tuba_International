import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccountDeleteModalComponent } from '../../../../../shared/components/comman/modal/account-delete-modal/account-delete-modal.component';

@Component({
    selector: 'app-user-dashboard-security',
    templateUrl: './user-dashboard-security.component.html',
    styleUrl: './user-dashboard-security.component.scss',
    standalone: true
})
export class UserDashboardSecurityComponent {

  constructor(private modal: NgbModal){}

  openModal(){
    this.modal.open(AccountDeleteModalComponent, { size: 'm', centered: true, windowClass: 'edit-profile-modal'})
  }
}
