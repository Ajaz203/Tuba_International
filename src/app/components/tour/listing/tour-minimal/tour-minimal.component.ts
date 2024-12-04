import { Component } from '@angular/core';
import { tours } from '../../../../shared/interface/tour';
import { PaginationService } from '../../../../shared/services/pagination.service';
import { TourService } from '../../../../shared/services/tour.service';
import { Select } from '@ngxs/store';
import { tourState } from '../../../../shared/store/state/tour.state';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HotelService } from '../../../../shared/services/hotel.service';
import { pagination } from '../../../../shared/interface/cab';
import { CurrencySymbolPipe } from '../../../../shared/pipe/currency.pipe';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { PaginationComponent } from '../../../../shared/components/ui/pagination/pagination.component';
import { SearchBoxComponent } from '../../../../shared/components/comman/search-box/search-box.component';
import { GridPanelComponent } from '../../../../shared/components/comman/grid-panel/grid-panel.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-tour-minimal',
    templateUrl: './tour-minimal.component.html',
    styleUrls: ['./tour-minimal.component.scss'],
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, GridPanelComponent, SearchBoxComponent, RouterLink, PaginationComponent, FooterComponent, LayoutComponent, CurrencySymbolPipe]
})
export class TourMinimalComponent {

  public bg_image = 'assets/images/inner-pages/breadcrumb1.jpg';
  public title = 'holiday package';
  public parent = 'Home';
  public child = 'holiday package';

  public selectedTabValue: string;

  public tourDetails : tours[];
  public tour: tours[];

  public paginate: pagination;
  public pageNo: number = 1;

  public getFlightParams: string[] = [];
  public getTravelTypeParams: string[] = [];
  public getRatingParams: string[] = [];
  public getTripDurationParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public tags: string[];

  @Select(tourState.tour) tour$: Observable<tours[]>;

  constructor(
    public tourService: TourService,
    private paginationService: PaginationService,
    public hotelService: HotelService,
    private router: Router,
    private route: ActivatedRoute) {
      this.route.queryParams.subscribe((params) => {
        this.pageNo = params['page'] ? params['page'] : this.pageNo;
        this.getFlightParams = params['flight'] ? params['flight'].split(',') : [];
        this.getTravelTypeParams = params['travel_type'] ? params['travel_type'].split(',') : [];
        this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
        this.getTripDurationParams = params['trip_duration'] ? params['trip_duration'].split(',') : [];
        this.minPrice = params['minPrice'] ? params['minPrice'] : [];
        this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];

        this.tags = [...this.getFlightParams, ...this.getTravelTypeParams, ...this.getRatingParams, ...this.getTripDurationParams]
      })
    this.tourService.isOpenFindTours = false;

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
  }

  getTabValue(value: string){
    this.selectedTabValue = value;

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
  }

   setPage(page: number){
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: "merge"
    });
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
}
