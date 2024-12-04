import { Component, Input } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { hotels, priceFilter } from '../../../../../shared/interface/hotel';
import { GridService } from '../../../../../shared/services/grid.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { PaginationService } from '../../../../../shared/services/pagination.service';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { hotelState } from '../../../../../shared/store/state/hotel.state';
import { Observable } from 'rxjs';
import { pagination } from '../../../../../shared/interface/cab';
import { getHotels } from '../../../../../shared/store/action/hotel.action';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { PaginationComponent } from '../../../ui/pagination/pagination.component';
import { NoDataComponent } from '../../../ui/no-data/no-data.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hotel-details',
    templateUrl: './hotel-details.component.html',
    styleUrls: ['./hotel-details.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink, NgbRating, NoDataComponent, PaginationComponent, CurrencySymbolPipe]
})
export class HotelDetailsComponent {

  @Input() selectedTabValue: string;
  @Input() gridType: string;
  @Input() responsiveLatestFilter: boolean;
  @Input() mapFilter: boolean;
  @Input() imageSlider: boolean;
  @Input() noSidebar: boolean;

  public hotelDetails: hotels[];
  public hotels: hotels[];

  public listView: boolean = false;
  public col_sm_6: boolean = false;
  public col_xl_4: boolean = false;
  public col_xl_3: boolean = false;
  public col_lg_4: boolean = false;
  public col_12: boolean = false;

  public getDistrictParams: string[] = [];
  public getFacilityParams: string[] = [];
  public getRatingParams: string[] = [];
  public getLanguageParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public tags: string[];
  public params: Params;
  public paramsTag: string[];

  public paginate: pagination;
  public pageNo: number = 1;

  public icon: string = 'assets/images/icon/hotel.png';
  public title: string = 'hotel';
  public description: string = 'no hotels were found. modify your search and try again';

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
        items: 1
      }
    },
  }

  @Select(hotelState.hotel) hotel$: Observable<hotels[]>;

  constructor(
    public hotelService: HotelService,
    private gridService: GridService,
    private config: NgbRatingConfig,
    private paginationService: PaginationService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store){
      this.route.queryParams.subscribe((params) => {
        this.params = params;
        this.pageNo = params['page'] ? params['page'] : this.pageNo;
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

        this.tags = [...this.getDistrictParams, ...this.getFacilityParams, ...this.getRatingParams, ...this.getLanguageParams]

        // Rating
        this.config.max = 5;
        this.config.readonly = true;

        this.hotel$.subscribe((res) => {
          this.hotelDetails = res

          if(this.hotelDetails){
            this.hotels = this.hotelDetails.filter((data) => {
              if(this.selectedTabValue == 'all'){
                return data
              }else{
                return data.category == this.selectedTabValue;
              }
            })
            // Pagination
          this.paginate = this.paginationService.getPager(this.hotels?.length, +this.pageNo );

          this.hotels = this.hotels?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);
          }
        })
      })
  }

  ngOnInit(){
    if(this.gridType == '2-grid'){
      this.gridService.col_sm_6 = true;
    }
    else if(this.gridType == '3-grid'){
      this.gridService.col_sm_6 = true;
      this.gridService.col_xl_4 = true;
    }else if(this.gridType == '4-grid'){
      this.gridService.col_sm_6 = true;
      this.gridService.col_xl_3 = true;
      this.gridService.col_lg_4 = true;
      this.gridService.col_xl_4 = false;
    }
  }

  ngOnChanges(){
    this.route.queryParams.subscribe((params) => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;

      if(this.hotelDetails){
          this.hotels = this.hotelDetails.filter((data) => {
            if(this.selectedTabValue == 'all'){
              return data
            }else{
              return data.category == this.selectedTabValue;
            }
          })
        }
      // Pagination
        this.paginate = this.paginationService.getPager(this.hotels?.length, +this.pageNo );

        this.hotels = this.hotels?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);

    })

    // If No Sidebar
    if(this.noSidebar){
      if (!Object.keys(this.params).length) {
        this.paramsTag = [];
        this.store.dispatch(new getHotels(this.paramsTag, this.priceData));
      }
    }
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

  ngDoCheck(){
    this.listView = this.gridService.listView;
    this.col_sm_6 = this.gridService.col_sm_6;
    this.col_xl_4 = this.gridService.col_xl_4;
    this.col_xl_3 = this.gridService.col_xl_3;
    this.col_lg_4 = this.gridService.col_lg_4;
    this.col_12 = this.gridService.col_12;
  }

  ngOnDestroy(){
    this.gridService.col_sm_6 = false;
    this.gridService.col_xl_4 = false;
    this.gridService.col_xl_3 = false;
    this.gridService.col_lg_4 = false;
    this.gridService.col_12 = false;
  }
}
