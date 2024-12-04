import { Component, Input } from '@angular/core';
import { RestaurantService } from '../../../../../shared/services/restaurant.service';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { getRestaurant } from '../../../../../shared/store/action/restaurant.action';
import { RestaurantMapFilerComponent } from './restaurant-map-filer/restaurant-map-filer.component';
import { RestaurantDeliveryTimeComponent } from './restaurant-delivery-time/restaurant-delivery-time.component';
import { RestaurantPriceComponent } from './restaurant-price/restaurant-price.component';
import { RestaurantRatingComponent } from './restaurant-rating/restaurant-rating.component';
import { RestaurantCuisinesComponent } from './restaurant-cuisines/restaurant-cuisines.component';
import { RestaurantPopularTagsComponent } from './restaurant-popular-tags/restaurant-popular-tags.component';
import { NgStyle, NgClass } from '@angular/common';

@Component({
    selector: 'app-restaurant-filter',
    templateUrl: './restaurant-filter.component.html',
    styleUrl: './restaurant-filter.component.scss',
    standalone: true,
    imports: [NgStyle, NgClass, RestaurantPopularTagsComponent, RestaurantCuisinesComponent, RestaurantRatingComponent, RestaurantPriceComponent, RestaurantDeliveryTimeComponent, RestaurantMapFilerComponent]
})
export class RestaurantFilterComponent {

  @Input() horizontalFilter: boolean = false;
  @Input() mapFilter: boolean;
  @Input() tags: boolean;
  @Input() price: boolean;
  @Input() restaurant: boolean;
  @Input() cuisines: boolean;
  @Input() rating: boolean;
  @Input() time: boolean;

  public isOpenFilter: boolean = true;
  public getTagParams: string[] = [];
  public getCuisinesParams: string[] = [];
  public getRatingParams: string[] = [];
  public getDeliveryTime: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public paramsTag: string[];

  constructor(
    public restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private store: Store){
      this.route.queryParams.subscribe((params) => {
        this.getTagParams = params['tag'] ? params['tag'].split(',') : [];
        this.getCuisinesParams = params['cuisines'] ? params['cuisines'].split(',') : [];
        this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
        this.getDeliveryTime = params['delivery_time'] ? params['delivery_time'].split(',') : [];
        this.minPrice = params['minPrice'] ? params['minPrice'] : [];
        this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
        this.priceData = {
          minPrice: this.minPrice,
          maxPrice: this.maxPrice
        }

        this.paramsTag = [...this.getTagParams, ...this.getCuisinesParams, ...this.getRatingParams, ...this.getDeliveryTime];

        this.store.dispatch(new getRestaurant(this.paramsTag, this.priceData));

      })
    }

  openFilter(){
    this.isOpenFilter =! this.isOpenFilter;
  }

  closeResponsiveFilter(){
    this.restaurantService.isOpenResponsiveFilter = false;
  }

  closeResponsiveHorizontal(){
    this.restaurantService.isOpenHorizontalFilter = false;
  }
}
