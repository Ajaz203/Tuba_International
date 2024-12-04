import { Component, Input } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { cab, pagination } from '../../../../../shared/interface/cab';
import { CabService } from '../../../../../shared/services/cab.service';
import { GridService } from '../../../../../shared/services/grid.service';
import { PaginationService } from '../../../../../shared/services/pagination.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { Select, Store } from '@ngxs/store';
import { cabState } from '../../../../../shared/store/state/cab.state';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { getCab } from '../../../../../shared/store/action/cab.action';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { SlicePipe } from '@angular/common';
import { PaginationComponent } from '../../../ui/pagination/pagination.component';
import { NoDataComponent } from '../../../ui/no-data/no-data.component';

@Component({
    selector: 'app-cab-details',
    templateUrl: './cab-details.component.html',
    styleUrl: './cab-details.component.scss',
    standalone: true,
    imports: [CarouselModule, RouterLink, NoDataComponent, PaginationComponent, SlicePipe, CurrencySymbolPipe]
})
export class CabDetailsComponent {

  @Input() selectedTabValue: string;
  @Input() gridType: string;
  @Input() responsiveLatestFilter: boolean;
  @Input() imageSlider: boolean;
  @Input() noSidebar: boolean;

  public cabDetails: cab[];
  public cabs: cab[];

  public getCarTypeParams: string[] = [];
  public getCarCapacityParams: string[] = [];
  public getRatingParams: string[] = [];
  public getCarOptionParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public paramsTag: string[];
  public params: Params;

  public paginate: pagination;
  public pageNo: number = 1;

  public icon: string = 'assets/images/cab/car/2.png';
  public title: string = 'cars';
  public description: string = 'no cars were found for this route and date combination. modify your search and try again';

  public listView: boolean = false;
  public col_sm_6: boolean = false;
  public col_xl_4: boolean = false;
  public col_xl_3: boolean = false;
  public col_lg_4: boolean = false;
  public col_12: boolean = false;

  public options : OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1
      }
    }
  }

  @Select(cabState.cab) cab$: Observable<cab[]>;

  constructor(
    private cabService: CabService,
    private gridService: GridService,
    private paginationService: PaginationService,
    public hotelService: HotelService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store){
      this.route.queryParams.subscribe((params) => {
        this.params = params;
        this.pageNo = params['page'] ? params['page'] : this.pageNo;
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

          this.cab$.subscribe((res) => {
            this.cabDetails = res;

            if(this.cabDetails){
            this.cabs = this.cabDetails.filter((data) => {
              if(this.selectedTabValue){
                if(this.selectedTabValue == 'all'){
                  return data
                }else{
                  return data.category == this.selectedTabValue;
                }
              }else {
                return data
              }

            })
            // Pagination
            this.paginate = this.paginationService.getPager(this.cabs?.length, +this.pageNo, 6 );

            this.cabs = this.cabs?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);
          }
       })
    })
  }


  ngOnInit(){
    if(this.gridType == '3-grid'){
      this.gridService.col_sm_6 = true;
      this.gridService.col_xl_4 = true;
    }else if(this.gridType == '4-grid'){
      this.gridService.col_sm_6 = true;
      this.gridService.col_xl_3 = true;
      this.gridService.col_lg_4 = true;
      this.gridService.col_xl_4 = false;
    }
  }

  openResponsiveFilter(){
    this.cabService.isOpenResponsiveFilter = true;
  }

  ngOnChanges(){
    if(this.cabDetails){
      this.cabs = this.cabDetails.filter((data) => {
        if(this.selectedTabValue == 'all'){
          return data
        }else{
          return data.category == this.selectedTabValue;
        }
      })
    }
    // Pagination
    this.paginate = this.paginationService.getPager(this.cabs?.length, +this.pageNo, 6 );

    this.cabs = this.cabs?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);


    // If No Sidebar
    if(this.noSidebar){
      if (!Object.keys(this.params).length) {
        this.paramsTag = [];
        this.store.dispatch(new getCab(this.paramsTag, this.priceData));
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

  removeTag(value: string){
    this.getCarTypeParams = this.getCarTypeParams.filter((car_type: string) => car_type != value);
    this.getCarCapacityParams = this.getCarCapacityParams.filter((capacity: string) => capacity != value);
    this.getRatingParams = this.getRatingParams.filter((rating: string) => rating != value);
    this.getCarOptionParams = this.getCarOptionParams.filter((car_option: string) => car_option != value);

    let params = {
      car_type: this.getCarTypeParams.length ? this.getCarTypeParams.join(',') : null,
      capacity: this.getCarCapacityParams.length ? this.getCarCapacityParams.join(',') : null,
      rating: this.getRatingParams.length ? this.getRatingParams.join(',') : null,
      car_option: this.getCarOptionParams.length ? this.getCarOptionParams.join(',') : null
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
