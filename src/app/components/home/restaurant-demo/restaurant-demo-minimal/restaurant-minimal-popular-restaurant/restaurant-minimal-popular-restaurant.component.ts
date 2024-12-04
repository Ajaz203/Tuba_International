import { Component, Input } from '@angular/core';
import { restaurantGridMenu } from '../../../../../shared/components/data/data/restaurant';
import { restaurantDetail } from '../../../../../shared/interface/restaurant-minimal';
import { RestaurantService } from '../../../../../shared/services/restaurant.service';
import { RestaurantDetailsComponent } from '../../../../../shared/components/comman/restaurant/restaurant-details/restaurant-details.component';

@Component({
    selector: 'app-restaurant-minimal-popular-restaurant',
    templateUrl: './restaurant-minimal-popular-restaurant.component.html',
    styleUrls: ['./restaurant-minimal-popular-restaurant.component.scss'],
    standalone: true,
    imports: [RestaurantDetailsComponent]
})
export class RestaurantMinimalPopularRestaurantComponent {

  @Input() id: number[];

  public restaurant: restaurantDetail[];
  public restaurantDetails: restaurantDetail[];
  public  restaurantGridMenu = restaurantGridMenu;

  public activeMenu = "";

  constructor(private restaurantService: RestaurantService){
    this.restaurantService.restaurant().subscribe(response => {
      this.restaurant = response.restaurant;

      if(Array.isArray(this.id)){
        this.restaurant = this.restaurant?.filter((items) => {
          return this.id.includes(items.id)
        })

        // Get By Default Data of Selected Value
        this.restaurantDetails = this.restaurant.filter((data) => {
          if(data.restaurantType == this.activeMenu){
            return data;
          }else if(this.activeMenu == ""){
            return data;
          }
          return
        })
      }
    })
  }

  getRestaurantDetails(value: string){
    this.activeMenu = value;

    this.restaurantDetails = this.restaurant.filter((data) => {
      if(data.restaurantType == value){
        return data;
      }else if(value == ""){
        return data;
      }
      return
    })
  }
}
