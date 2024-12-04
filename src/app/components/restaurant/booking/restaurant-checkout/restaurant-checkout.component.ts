import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantAddressModalComponent } from '../../../../shared/components/comman/modal/restaurant-address-modal/restaurant-address-modal.component';
import { RestaurantAddress } from '../../../../shared/components/data/data/restaurant';
import { restaurants } from '../../../../shared/interface/restaurant';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { RestaurantCartItemsComponent } from '../../single-page/widgets/restaurant-cart-items/restaurant-cart-items.component';
import { BookingComponent } from '../../../../shared/components/comman/booking/booking.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-restaurant-checkout',
    templateUrl: './restaurant-checkout.component.html',
    styleUrl: './restaurant-checkout.component.scss',
    standalone: true,
    imports: [HeaderComponent, BookingComponent, RestaurantCartItemsComponent, FooterComponent, LayoutComponent]
})
export class RestaurantCheckoutComponent {
  
  public restaurantDetails: restaurants;
  public RestaurantAddress = RestaurantAddress;

  constructor(private restaurantService: RestaurantService, private modal: NgbModal) {
    this.restaurantService.restaurantDetails().subscribe(response => {
      this.restaurantDetails = response;
    })
  }

  openModal(item: number, type: string){
    if(type == 'edit'){
    this.RestaurantAddress.forEach((data) => {
      if(data.id == item){
          data.active = true;
        }else{
          data.active = false;
        }
      })
    }
    const modal = this.modal.open(RestaurantAddressModalComponent, { size : 'm', centered : true, windowClass: 'edit-profile-modal restaurant-modal'})
    modal.componentInstance.modalType = type;
  }

}
