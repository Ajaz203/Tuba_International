import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { restaurantClassic } from '../interface/restaurant-classic';
import { HttpClient } from '@angular/common/http';
import { restaurant, restaurantDetail, restaurantMinimal } from '../interface/restaurant-minimal';
import { restaurants } from '../interface/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  public isOpenResponsiveFilter: boolean = false;
  public isOpenHorizontalFilter: boolean = false;
  public isOpenMapFilter: boolean = false;
  public isOpenCart: boolean = false;

  constructor(private http: HttpClient) { }

  // Restaurant Classic
  restaurantClassic(): Observable<restaurantClassic>{
    return this.http.get<restaurantClassic>('assets/json/theme/restaurant-classic.json')
  }

  // Restaurant Minimal
  restaurantMinimal(): Observable<restaurantMinimal>{
    return this.http.get<restaurantMinimal>('assets/json/theme/restaurant-minimal.json')
  }

  // Restaurant
  restaurant(): Observable<restaurant>{
    return this.http.get<restaurant>('assets/json/grid/restaurant.json')
  }

  restaurantDetails(): Observable<restaurants>{
    return this.http.get<restaurants>('assets/json/pages/restaurant-details.json')
  }

  public restaurantsData: string | undefined;
  getRestaurantDetails(filter: string[]): Observable<restaurantDetail[]>{
    return this.restaurant().pipe(map((restaurant) =>
      restaurant.restaurant.filter((item) => {
        if(!filter.length){
          return true
        }

        this.restaurantsData = filter.find((data: string) => {
          if(item.tags){
            if(item.tags.includes(data))
              return data
          }
        })
        return this.restaurantsData;
      })
    ));
  }

  getMaxPrice(): Observable<number>{
   return this.restaurant().pipe(map((restaurant) =>
      Math.max(...restaurant.restaurant.map((price) => price.price))));
    }
}
