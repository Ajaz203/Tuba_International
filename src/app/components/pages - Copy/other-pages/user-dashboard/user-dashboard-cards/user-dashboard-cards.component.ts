import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardModalComponent } from '../../../../../shared/components/comman/modal/card-modal/card-modal.component';
import { cards } from '../../../../../shared/interface/pages';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-user-dashboard-cards',
    templateUrl: './user-dashboard-cards.component.html',
    styleUrl: './user-dashboard-cards.component.scss',
    standalone: true,
    imports: [NgClass]
})
export class UserDashboardCardsComponent {

  @Input() card: cards[];

  constructor(private modal: NgbModal){}

  openModal(value: string){
    const modal = this.modal.open(CardModalComponent, { size: 'm', centered: true, windowClass: 'edit-profile-modal'});
    modal.componentInstance.modalType = value;
  }

}
