import { Component } from '@angular/core';
import { restaurantDeliveryTime } from '../../../../../../shared/components/data/data/filter/restaurant';
import { ActivatedRoute, Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-restaurant-delivery-time',
    templateUrl: './restaurant-delivery-time.component.html',
    styleUrl: './restaurant-delivery-time.component.scss',
    standalone: true,
    imports: [NgStyle]
})
export class RestaurantDeliveryTimeComponent {

  public restaurantDeliveryTime = restaurantDeliveryTime;
  public isOpenTime: boolean = true;
  public selectedTime: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.selectedTime = params['delivery_time'] ? params['delivery_time'].split(",") : []
      })
    }

    openTime(){
      this.isOpenTime =! this.isOpenTime;
    }

    applyFilter(event: Event){
      const index = this.selectedTime.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

      if((event.target as HTMLInputElement).checked){
        this.selectedTime.push((event.target as HTMLInputElement).value)
      }else{
        this.selectedTime.splice(index,1)
      }

        this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { delivery_time: this.selectedTime.length ? this.selectedTime.join(",") : null },
        queryParamsHandling: 'merge', // preserve the existing query params in the route
        skipLocationChange: false  // do trigger navigation
      });
    }

  // check if the item are selected
  checked(item: string){
    if(this.selectedTime?.includes(item)){
      return true;
    }
    return false;
  }
}
