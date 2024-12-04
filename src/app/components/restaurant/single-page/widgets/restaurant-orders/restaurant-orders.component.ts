import { Component, HostListener, Input } from '@angular/core';
import { restaurantOrders } from '../../../../../shared/interface/restaurant';
import { RestaurantMenuItemsComponent } from './restaurant-menu-items/restaurant-menu-items.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';

@Component({
    selector: 'app-restaurant-orders',
    templateUrl: './restaurant-orders.component.html',
    styleUrl: './restaurant-orders.component.scss',
    standalone: true,
    imports: [RestaurantMenuComponent, RestaurantMenuItemsComponent]
})
export class RestaurantOrdersComponent {

  @Input() restaurantOrders: restaurantOrders[];

  public isStuck: boolean = false;
  public isNotStuck: boolean = false;

  @HostListener('window: scroll', [])
  onWindowScroll(){
    let number = window.pageYOffset || 0;
    if (number > 765) {
      this.isStuck = true;
      this.isNotStuck = false;
    }else {
      this.isStuck = false
    }if(number > 3600){
      this.isNotStuck = true;
      this.isStuck = false;
    }
  }
}
