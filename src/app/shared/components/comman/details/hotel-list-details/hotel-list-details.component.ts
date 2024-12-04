import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { hotelState } from '../../../../../shared/store/state/hotel.state';
import { hotels } from '../../../../../shared/interface/hotel';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { PaginationService } from '../../../../../shared/services/pagination.service';
import { pagination } from '../../../../../shared/interface/cab';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { PaginationComponent } from '../../../ui/pagination/pagination.component';
import { NoDataComponent } from '../../../ui/no-data/no-data.component';
import { HotelListImagesComponent } from './hotel-list-images/hotel-list-images.component';

@Component({
    selector: 'app-hotel-list-details',
    templateUrl: './hotel-list-details.component.html',
    styleUrls: ['./hotel-list-details.component.scss'],
    standalone: true,
    imports: [HotelListImagesComponent, RouterLink, NgbRating, NoDataComponent, PaginationComponent, CurrencySymbolPipe]
})
export class HotelListDetailsComponent {

  @Input() responsiveLatestFilter: boolean;
  @Input() selectedTabValue: string;
  @Input() imageSlider: boolean;
  @Input() thumbnailImages: boolean;
  @Input() description: boolean;
  @Input() thumbnailVideo: boolean;

  public hotelDetails: hotels[];
  public hotels: hotels[];

  public paginate: pagination; 
  public pageNo: number = 1;

  public getDistrictParams: string[] = [];
  public getFacilityParams: string[] = [];
  public getRatingParams: string[] = [];
  public getLanguageParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public tags: string[];

  public icon: string = 'assets/images/icon/hotel.png';
  public title: string = 'hotel';
  public descriptionData: string = 'no hotels were found. modify your search and try again';

  @Select(hotelState.hotel) hotel$: Observable<hotels[]>;

  constructor(
    public hotelService: HotelService,
    private config: NgbRatingConfig,
    private paginationService: PaginationService,
    private router: Router,
    private route: ActivatedRoute){

    this.route.queryParams.subscribe((params) => {
        this.pageNo = params['page'] ? params['page'] : this.pageNo;
        this.getDistrictParams = params['district'] ? params['district'].split(',') : [];
        this.getFacilityParams = params['facility'] ? params['facility'].split(',') : [];
        this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
        this.getLanguageParams = params['language'] ? params['language'].split(',') : [];
        this.minPrice = params['minPrice'] ? params['minPrice'] : [];
        this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];

        this.tags = [...this.getDistrictParams, ...this.getFacilityParams, ...this.getRatingParams, ...this.getLanguageParams]

        // Rating
        this.config.max = 5;
        this.config.readonly = true;

        this.hotel$.subscribe((res) => {
          this.hotelDetails = res

          this.paginate = this.paginationService.getPager(this.hotelDetails?.length, +this.pageNo );

          this.hotelDetails = this.hotelDetails?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);
        })

    })
  }

  removeTag(value: string){
    this.getDistrictParams = this.getDistrictParams.filter((district: string) => district != value);
    this.getFacilityParams = this.getFacilityParams.filter((facility: string) => facility != value);
    this.getRatingParams = this.getRatingParams.filter((rating: string) => rating != value);
    this.getLanguageParams = this.getLanguageParams.filter((language: string) => language != value);


    let params = {
      district: this.getDistrictParams.length ? this.getDistrictParams.join(',') : null,
      facility: this.getFacilityParams.length ? this.getFacilityParams.join(',') : null,
      rating: this.getRatingParams.length ? this.getRatingParams.join(',') : null,
      language: this.getLanguageParams.length ? this.getLanguageParams.join(',') : null
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: params,
      queryParamsHandling: "merge"
    });

  }

  setPage(page: number){
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: "merge"
    });
  }

  openResponsiveFilter(){
    this.hotelService.isOpenResponsiveFilter = true;
  }
}
