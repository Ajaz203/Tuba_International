import { Component, EventEmitter, Output } from '@angular/core';
import { restaurantTab } from '../../../../../shared/components/data/data/filter/restaurant';

@Component({
    selector: 'app-restaurant-page-tabs',
    templateUrl: './restaurant-page-tabs.component.html',
    styleUrl: './restaurant-page-tabs.component.scss',
    standalone: true
})
export class RestaurantPageTabsComponent {

  @Output() tabValue = new EventEmitter<string>();

  public restaurantTab = restaurantTab;

  public activeTab = 'order';

  changeTab(value: string){
    this.activeTab = value;
    this.tabValue.emit(this.activeTab);
  }
}
