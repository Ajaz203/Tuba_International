import { Component, Input } from '@angular/core';
import { cab, pagination } from '../../../../../shared/interface/cab';
import { CabService } from '../../../../../shared/services/cab.service';
import { PaginationService } from '../../../../../shared/services/pagination.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { cabState } from '../../../../../shared/store/state/cab.state';
import { Observable } from 'rxjs';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { getCab } from '../../../../../shared/store/action/cab.action';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { PaginationComponent } from '../../../ui/pagination/pagination.component';
import { NoDataComponent } from '../../../ui/no-data/no-data.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-cab-list-details',
    templateUrl: './cab-list-details.component.html',
    styleUrl: './cab-list-details.component.scss',
    standalone: true,
    imports: [NgClass, RouterLink, NoDataComponent, PaginationComponent, CurrencySymbolPipe]
})
export class CabListDetailsComponent {

  @Input() marginClass: boolean;
  @Input() responsiveLatestFilter: boolean ;
  @Input() noSidebar: boolean;

  public getCarTypeParams: string[] = [];
  public getCarCapacityParams: string[] = [];
  public getRatingParams: string[] = [];
  public getCarOptionParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public paramsTag: string[];
  public params: Params;

  public cabDetails: cab[];

  public paginate: pagination;
  public pageNo: number = 1;

  public icon: string = 'assets/images/cab/car/2.png';
  public title: string = 'cars';
  public description: string = 'no cars were found for this route and date combination. modify your search and try again';

  @Select(cabState.cab) cab$: Observable<cab[]>;

  constructor(
    private cabService: CabService,
    public hotelService: HotelService,
    private paginationService: PaginationService,
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

        if (!Object.keys(params).length) {
          this.paramsTag = [];
          this.store.dispatch(new getCab(this.paramsTag, this.priceData));
        }

        this.paramsTag = [...this.getCarTypeParams, ...this.getCarCapacityParams, ...this.getRatingParams, ...this.getCarOptionParams];

      this.cab$.subscribe((res) => {
        this.cabDetails = res

        this.paginate = this.paginationService.getPager(this.cabDetails?.length, +this.pageNo, 6 );

        this.cabDetails = this.cabDetails?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);


        })
    })}

    ngOnChanges(){
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

  openResponsiveFilter(){
    this.cabService.isOpenResponsiveFilter = true;
  }
}
