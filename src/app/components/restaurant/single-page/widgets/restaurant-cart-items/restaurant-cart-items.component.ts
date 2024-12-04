import { Component, Input } from '@angular/core';
import { OrderItems, restaurantOrders } from '../../../../../shared/interface/restaurant';
import { RestaurantService } from '../../../../../shared/services/restaurant.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { NgStyle, NgClass } from '@angular/common';

@Component({
    selector: 'app-restaurant-cart-items',
    templateUrl: './restaurant-cart-items.component.html',
    styleUrl: './restaurant-cart-items.component.scss',
    standalone: true,
    imports: [NgStyle, NgClass, CurrencySymbolPipe]
})
export class RestaurantCartItemsComponent {

  @Input() restaurantOrders: restaurantOrders[];
  @Input() emptyCart: boolean = false;
  @Input() backButton: boolean = true;

  constructor(public restaurantService: RestaurantService, public hotelService: HotelService){}

  setValue(item: OrderItems, type: number){
      if(type == 1){
        item.itemsValue += 1;
      }else if(type == -1){
        if(item.itemsValue >= 1){
          item.itemsValue -= 1;
        }

        if(item.itemsValue == 0){
          item.active = false
        }
      }
  }

  closeCart(){
    this.restaurantService.isOpenCart = false;
  }
}
