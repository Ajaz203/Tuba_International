import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEmailModalComponent } from '../../../../../shared/components/comman/modal/edit-email-modal/edit-email-modal.component';
import { EditPasswordModalComponent } from '../../../../../shared/components/comman/modal/edit-password-modal/edit-password-modal.component';
import { EditPhoneModalComponent } from '../../../../../shared/components/comman/modal/edit-phone-modal/edit-phone-modal.component';
import { UserProfileEditModalComponent } from '../../../../../shared/components/comman/modal/user-profile-edit-modal/user-profile-edit-modal.component';
import { userProfile } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-user-dashboard-profile',
    templateUrl: './user-dashboard-profile.component.html',
    styleUrl: './user-dashboard-profile.component.scss',
    standalone: true
})
export class UserDashboardProfileComponent {

  @Input() userProfile: userProfile[];

  constructor(private modal: NgbModal){}

  openModal(value: string){
    if(value == 'profile-edit'){
      this.modal.open(UserProfileEditModalComponent, { size: 'lg', centered: true, windowClass: 'edit-profile-modal'})
    }else if(value == 'edit-email'){
      this.modal.open(EditEmailModalComponent, { size: 'm', centered: true, windowClass: 'edit-profile-modal'})
    }else if(value == 'edit-phone'){
      this.modal.open(EditPhoneModalComponent, { size: 'm', centered: true, windowClass: 'edit-profile-modal'})
    }else if(value == 'edit-password'){
      this.modal.open(EditPasswordModalComponent, { size: 'm', centered: true, windowClass: 'edit-profile-modal'})
    }
  }
}
