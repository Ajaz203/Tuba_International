import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-restaurant-address-modal',
    templateUrl: './restaurant-address-modal.component.html',
    styleUrl: './restaurant-address-modal.component.scss',
    standalone: true,
    imports: [FormsModule]
})
export class RestaurantAddressModalComponent {

  @Input() modalType: string;

  constructor(private modal: NgbActiveModal){}

  closeModal(){
    this.modal.close();
  }

}
