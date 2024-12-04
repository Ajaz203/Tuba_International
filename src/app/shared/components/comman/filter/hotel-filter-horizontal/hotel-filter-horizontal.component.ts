import { Component } from '@angular/core';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngxs/store';
import { getHotels } from '../../../../../shared/store/action/hotel.action';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { HotelDistrictComponent } from '../hotel-filter/hotel-district/hotel-district.component';
import { HotelPriceComponent } from '../hotel-filter/hotel-price/hotel-price.component';
import { HotelRatingComponent } from '../hotel-filter/hotel-rating/hotel-rating.component';
import { HotelLanguageComponent } from '../hotel-filter/hotel-language/hotel-language.component';
import { HotelFacilityComponent } from '../hotel-filter/hotel-facility/hotel-facility.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-hotel-filter-horizontal',
    templateUrl: './hotel-filter-horizontal.component.html',
    styleUrls: ['./hotel-filter-horizontal.component.scss'],
    standalone: true,
    imports: [NgClass, HotelFacilityComponent, HotelLanguageComponent, HotelRatingComponent, HotelPriceComponent, HotelDistrictComponent]
})
export class HotelFilterHorizontalComponent {

  public getDistrictParams: string[] = [];
  public getFacilityParams: string[] = [];
  public getRatingParams: string[] = [];
  public getLanguageParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public paramsTag: string[];

  constructor(
    public hotelService: HotelService,
    private route: ActivatedRoute,
    private store: Store){
      this.route.queryParams.subscribe((params) => {
        this.getDistrictParams = params['district'] ? params['district'].split(',') : [];
        this.getFacilityParams = params['facility'] ? params['facility'].split(',') : [];
        this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
        this.getLanguageParams = params['language'] ? params['language'].split(',') : [];
        this.minPrice = params['minPrice'] ? params['minPrice'] : [];
        this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
        this.priceData = {
          minPrice: this.minPrice,
          maxPrice: this.maxPrice
        }

        this.paramsTag = [...this.getDistrictParams, ...this.getFacilityParams, ...this.getRatingParams, ...this.getLanguageParams];

        this.store.dispatch(new getHotels(this.paramsTag, this.priceData));

      })
    }

  closeResponsiveHorizontal(){
    this.hotelService.isOpenHorizontalFilter = false;
    this.hotelService.isOpenResponsiveHorizontal = false;
  }
}
