import { Component, Input } from '@angular/core';
import { CabService } from '../../../../../shared/services/cab.service';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { getCab } from '../../../../../shared/store/action/cab.action';
import { CabOptionComponent } from './cab-option/cab-option.component';
import { CabCapacityComponent } from './cab-capacity/cab-capacity.component';
import { CabPriceComponent } from './cab-price/cab-price.component';
import { CabRatingComponent } from './cab-rating/cab-rating.component';
import { CabCarTypeComponent } from './cab-car-type/cab-car-type.component';
import { NgStyle, NgClass } from '@angular/common';

@Component({
    selector: 'app-cab-filter',
    templateUrl: './cab-filter.component.html',
    styleUrl: './cab-filter.component.scss',
    standalone: true,
    imports: [NgStyle, NgClass, CabCarTypeComponent, CabRatingComponent, CabPriceComponent, CabCapacityComponent, CabOptionComponent]
})
export class CabFilterComponent {

  @Input() cabHorizontal: boolean;
  @Input() shadowClass: boolean;

  public isOpenCab: boolean = true;

  public getCarTypeParams: string[] = [];
  public getCarCapacityParams: string[] = [];
  public getRatingParams: string[] = [];
  public getCarOptionParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public paramsTag: string[];

  constructor(
    public cabService: CabService,
    private route: ActivatedRoute,
    private store: Store){
      this.cabService.isOpenResponsiveFilter = false;

      this.route.queryParams.subscribe((params) => {
        this.getCarTypeParams = params['car_type'] ? params['car_type'].split(',') : [];
        this.getCarCapacityParams = params['capacity'] ? params['capacity'].split(',') : [];
        this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
        this.getCarOptionParams = params['car_option'] ? params['car_option'].split(',') : [];
        this.minPrice = params['minPrice'] ? params['minPrice'] : [];
        this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
        this.priceData = {
          minPrice: this.minPrice,
          maxPrice: this.maxPrice
        }

        this.paramsTag = [...this.getCarTypeParams, ...this.getCarCapacityParams, ...this.getRatingParams, ...this.getCarOptionParams];

        this.store.dispatch(new getCab(this.paramsTag, this.priceData));
      })
    }

  openCab(){
    this.isOpenCab =! this.isOpenCab;
  }

  closeResponsiveFilter(){
    this.cabService.isOpenResponsiveFilter = false;
  }

  closeResponsiveHorizontalFilter(){
    this.cabService.isOpenHorizontalFilter = false;
  }
}
