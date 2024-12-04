import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { getHotels } from '../../../../../shared/store/action/hotel.action';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelLanguageComponent } from './hotel-language/hotel-language.component';
import { HotelPriceComponent } from './hotel-price/hotel-price.component';
import { HotelRatingComponent } from './hotel-rating/hotel-rating.component';
import { HotelFacilityComponent } from './hotel-facility/hotel-facility.component';
import { HotelDistrictComponent } from './hotel-district/hotel-district.component';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-hotel-filter',
    templateUrl: './hotel-filter.component.html',
    styleUrls: ['./hotel-filter.component.scss'],
    standalone: true,
    imports: [NgStyle, HotelDistrictComponent, HotelFacilityComponent, HotelRatingComponent, HotelPriceComponent, HotelLanguageComponent, HotelsComponent]
})

export class HotelFilterComponent {

  @Input() mapFilter: boolean;
  @Input() district: boolean;
  @Input() facility: boolean;
  @Input() rating: boolean;
  @Input() price: boolean;
  @Input() language: boolean;
  @Input() hotels: boolean;

  public isOpenFilter: boolean = true;
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

  openFilter(){
    this.isOpenFilter =! this.isOpenFilter;
  }

  closeResponsiveFilter(){
    this.hotelService.isOpenResponsiveFilter = false;
  }
}
