import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RestaurantService } from '../../../../../../shared/services/restaurant.service';
import { NgStyle } from '@angular/common';
import { LabelType, NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
    selector: 'app-restaurant-price',
    templateUrl: './restaurant-price.component.html',
    styleUrl: './restaurant-price.component.scss',
    standalone: true,
    imports: [NgStyle, NgxSliderModule]
})

export class RestaurantPriceComponent {

  public isOpenPrice: boolean = true;
  public priceArray: number[] = [];
  public getMinPriceParams: number;
  public getMaxPriceParams: number;
  public priceMinValue: number;
  public priceMaxValue: number;

  public options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "$" + value;
        case LabelType.High:
          return "$" + value;
        default:
          return "$" + value;
      }
    }
  };

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.getMinPriceParams = params['minPrice'];
        this.getMaxPriceParams = params['maxPrice'];

        this.priceMinValue = this.getMinPriceParams ? this.getMinPriceParams : 10
        this.priceMaxValue = this.getMaxPriceParams ? this.getMaxPriceParams : 100 ;

        this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { minPrice: this.priceMinValue, maxPrice: this.priceMaxValue },
        queryParamsHandling: 'merge', // preserve the existing query params in the route
      });
    });

    this.restaurantService.getMaxPrice().subscribe(response => {
      this.options = {
        floor: 0,
        ceil: response
      }

      this.options.ceil = response + 100;
    })
  }

  priceChange(event: Params) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { minPrice: event['value'], maxPrice: event['highValue'] },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
    });
  }

   openPrice(){
    this.isOpenPrice =! this.isOpenPrice;
  }
}
