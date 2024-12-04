import { Component, HostListener, Input } from '@angular/core';
import { restaurantOrders } from '../../../../../../shared/interface/restaurant';

@Component({
    selector: 'app-restaurant-menu',
    templateUrl: './restaurant-menu.component.html',
    styleUrl: './restaurant-menu.component.scss',
    standalone: true
})
export class RestaurantMenuComponent {

  @Input() restaurantOrders: restaurantOrders[];

  public activeTab = 'bestseller';
  public activeChild = '';

  @HostListener('window: scroll', [])
  onWindowScroll(){
    let number = window.pageYOffset || 0;
    if(number <= 765){
      this.activeTab = 'bestseller';
    }if(number > 1100){
      this.activeTab = 'bites';
    }if(number >= 2410){
      this.activeTab = 'sandwich';
    }if(number >= 2620){
      this.activeTab = 'pizza';
    }if(number >= 2802){
      this.activeTab = 'combo';
    }if(number >= 3120){
      this.activeTab = 'deserts';
    }
    // Active child
    if(number >= 1155){
      this.activeChild = 'chips';
    }if(number >= 1490){
      this.activeChild = 'salad';
    }if(number >= 1790){
      this.activeChild = 'fries';
    }if(number >= 2070){
      this.activeChild = 'sticks';
    }if(number >= 2235){
      this.activeChild = 'bread';
    }if(number >= 3180){
      this.activeChild = 'cheesecakes';
    }if(number >= 3335){
      this.activeChild = 'lime';
    }if(number >= 3540){
      this.activeChild = 'cream';
    }if(number >= 3825){
      this.activeChild = 'pudding';
    }
    if(number < 1160 || number > 2400 && number < 3175){
      this.activeChild = '';
    }
  }

  setPage(value: string) {
    document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' });
    this.activeTab = value;
    this.activeChild = value;
  }

}
