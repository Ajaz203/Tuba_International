import { Component, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { tours } from '../../../../../shared/interface/tour';
import { GridService } from '../../../../../shared/services/grid.service';
import { PaginationService } from '../../../../../shared/services/pagination.service';
import { TourService } from '../../../../../shared/services/tour.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { Select, Store } from '@ngxs/store';
import { tourState } from '../../../../../shared/store/state/tour.state';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { pagination } from '../../../../../shared/interface/cab';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { getTours } from '../../../../../shared/store/action/tour.action';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { PaginationComponent } from '../../../ui/pagination/pagination.component';
import { NoDataComponent } from '../../../ui/no-data/no-data.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-tour-details',
    templateUrl: './tour-details.component.html',
    styleUrls: ['./tour-details.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink, NoDataComponent, PaginationComponent, CurrencySymbolPipe]
})
export class TourDetailsComponent {

  @Input() responsiveLatestFilter: boolean;
  @Input() selectedTabValue: string;
  @Input() gridType: string;
  @Input() includeText: boolean;
  @Input() imageSlider: boolean;
  @Input() noSidebar: boolean;

  public tourDetails: tours[];
  public tour: tours[];

  public listView: boolean = false;
  public col_sm_6: boolean = false;
  public col_xl_4: boolean = false;
  public col_xl_3: boolean = false;
  public col_lg_4: boolean = false;
  public col_12: boolean = false;

  public paginate: pagination;
  public pageNo: number = 1;

  public getFlightParams: string[] = [];
  public getTravelTypeParams: string[] = [];
  public getRatingParams: string[] = [];
  public getTripDurationParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public tags: string[];
  public paramsTag: string[];
  public params: Params;

  public icon: string = 'assets/images/icon/tour/tour-not-found.jpg';
  public title: string = 'tour';
  public description: string = 'no tours were found. modify your search and try again';

  public options = {
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
  }

  @Select(tourState.tour) tour$: Observable<tours[]>;

  constructor(
    private tourService: TourService,
    private gridService: GridService,
    private config: NgbRatingConfig,
    private paginationService: PaginationService,
    public hotelService: HotelService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store){
      this.route.queryParams.subscribe((params) => {
        this.params = params;
        this.pageNo = params['page'] ? params['page'] : this.pageNo;
        this.getFlightParams = params['flight'] ? params['flight'].split(',') : [];
        this.getTravelTypeParams = params['travel_type'] ? params['travel_type'].split(',') : [];
        this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
        this.getTripDurationParams = params['trip_duration'] ? params['trip_duration'].split(',') : [];
        this.minPrice = params['minPrice'] ? params['minPrice'] : [];
        this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
        this.priceData = {
          minPrice: this.minPrice,
          maxPrice: this.maxPrice
        }

        this.tags = [...this.getFlightParams, ...this.getTravelTypeParams, ...this.getRatingParams, ...this.getTripDurationParams]

        // Rating
        this.config.max = 5;
        this.config.readonly = true;

        this.tour$.subscribe((res) => {
          this.tourDetails = res

          if(this.tourDetails){
            this.tour = this.tourDetails.filter((data) => {
              if(this.selectedTabValue == 'all'){
                return data
              }else{
                return data.category == this.selectedTabValue;
              }
            })
            // Pagination
          this.paginate = this.paginationService.getPager(this.tour?.length, +this.pageNo );

          this.tour = this.tour?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);
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

      if(this.tourDetails){
          this.tour = this.tourDetails.filter((data) => {
            if(this.selectedTabValue == 'all'){
              return data
            }else{
              return data.category == this.selectedTabValue;
            }
          })
        }
        // Pagination
          this.paginate = this.paginationService.getPager(this.tour?.length, +this.pageNo );

          this.tour = this.tour?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);
    });

    // If No Sidebar
    if(this.noSidebar){
      if (!Object.keys(this.params).length) {
        this.paramsTag = [];
        this.store.dispatch(new getTours(this.paramsTag, this.priceData));
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
    this.tourService.isOpenResponsiveFilter = true;
  }

  removeTag(value: string){
    this.getFlightParams = this.getFlightParams.filter((flight: string) => flight != value);
    this.getTravelTypeParams = this.getTravelTypeParams.filter((travel_type: string) => travel_type != value);
    this.getRatingParams = this.getRatingParams.filter((rating: string) => rating != value);
    this.getTripDurationParams = this.getTripDurationParams.filter((trip_duration: string) => trip_duration != value);


    let params = {
      flight: this.getFlightParams.length ? this.getFlightParams.join(',') : null,
      travel_type: this.getTravelTypeParams.length ? this.getTravelTypeParams.join(',') : null,
      rating: this.getRatingParams.length ? this.getRatingParams.join(',') : null,
      trip_duration: this.getTripDurationParams.length ? this.getTripDurationParams.join(',') : null
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
