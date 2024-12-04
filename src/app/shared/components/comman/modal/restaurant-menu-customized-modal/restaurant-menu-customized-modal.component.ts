import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderItems } from '../../../../../shared/interface/restaurant';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-restaurant-menu-customized-modal',
    templateUrl: './restaurant-menu-customized-modal.component.html',
    styleUrl: './restaurant-menu-customized-modal.component.scss',
    standalone: true,
    imports: [FormsModule, CurrencySymbolPipe]
})
export class RestaurantMenuCustomizedModalComponent {

  @Input() item: OrderItems;

  constructor(private modal: NgbActiveModal, public hotelService: HotelService){}

  addToCart(){
    this.modal.close();
    this.item.active = true;
    this.item.itemsValue = 1;
  }

  closeModal(){
    this.modal.close();
  }
}
