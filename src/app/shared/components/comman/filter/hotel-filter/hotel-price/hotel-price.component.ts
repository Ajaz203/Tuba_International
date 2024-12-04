import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HotelService } from '../../../../../../shared/services/hotel.service';
import { NgStyle } from '@angular/common';
import { LabelType, NgxSliderModule, Options } from '@angular-slider/ngx-slider';

@Component({
    selector: 'app-hotel-price',
    templateUrl: './hotel-price.component.html',
    styleUrls: ['./hotel-price.component.scss'],
    standalone: true,
    imports: [NgStyle, NgxSliderModule]
})
export class HotelPriceComponent {

  @Input() filter: Params;

  public isOpenPrice: boolean = true;
  public priceArray: number[] = [];
  public getMinPriceParams: number;
  public getMaxPriceParams: number;
  public priceMinValue: number;
  public priceMaxValue: number;

  public options: Options = {
    floor: 0,
    ceil: 2500,
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
    private hotelService: HotelService,
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.getMinPriceParams = params['minPrice'];
        this.getMaxPriceParams = params['maxPrice'];

        this.priceMinValue = this.getMinPriceParams ? this.getMinPriceParams : 500
        this.priceMaxValue = this.getMaxPriceParams ? this.getMaxPriceParams : 1500 ;

        this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { minPrice: this.priceMinValue, maxPrice: this.priceMaxValue },
        queryParamsHandling: 'merge', // preserve the existing query params in the route
      });
    });

    this.hotelService.getMaxPrice().subscribe(response => {
      this.options = {
        floor: 0,
        ceil: response
      }

      this.options.ceil = response + 1000;
    })
  }


   openPrice(){
    this.isOpenPrice =! this.isOpenPrice;
  }

  priceChange(event: Params) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { minPrice: event['value'], maxPrice: event['highValue'] },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
    });
  }
}
