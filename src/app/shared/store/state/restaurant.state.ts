import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { restaurantDetail } from "../../interface/restaurant-minimal";
import { RestaurantService } from "../../services/restaurant.service";
import { getRestaurant } from "../action/restaurant.action";

export class restaurantModal {
  data: {
    restaurant: restaurantDetail[];
  };
}

@State<restaurantModal>({
  name: 'restaurant',
  defaults: {
    data: {
      restaurant: [],
    },
  },
})

@Injectable()
export class restaurantState{

  public restaurants: restaurantDetail[];
  constructor(private restaurantService: RestaurantService) {}

  @Selector()
  static restaurant(state: restaurantModal) {
    return state.data.restaurant;
  }

  @Action(getRestaurant)
  getData( ctx: StateContext<restaurantModal>, action: getRestaurant ){
    return this.restaurantService.getRestaurantDetails(action.filter).pipe(
      tap((res) => {
        if (action.price.minPrice  || action.price.maxPrice ) {
          this.restaurants = res.filter(
            (item: { price: number }) =>
              item.price >= action.price.minPrice && item.price <= action.price.maxPrice
          );
        }else {
          this.restaurants = res
        }

        ctx.setState({
          data: {
            restaurant: this.restaurants,
          },
        });

      })
    )
  }
}
