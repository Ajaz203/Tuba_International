import { Component, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { tours } from '../../../../../shared/interface/tour';
import { PaginationService } from '../../../../../shared/services/pagination.service';
import { TourService } from '../../../../../shared/services/tour.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { Select } from '@ngxs/store';
import { tourState } from '../../../../../shared/store/state/tour.state';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { pagination } from '../../../../../shared/interface/cab';
import { CurrencySymbolPipe } from '../../../../pipe/currency.pipe';
import { PaginationComponent } from '../../../ui/pagination/pagination.component';
import { NoDataComponent } from '../../../ui/no-data/no-data.component';
import { TourListImagesComponent } from './tour-list-images/tour-list-images.component';

@Component({
    selector: 'app-tour-list-details',
    templateUrl: './tour-list-details.component.html',
    styleUrls: ['./tour-list-details.component.scss'],
    standalone: true,
    imports: [TourListImagesComponent, RouterLink, NoDataComponent, PaginationComponent, CurrencySymbolPipe]
})
export class TourListDetailsComponent {

  @Input() selectedTabValue: string;
  @Input() responsiveLatestFilter: boolean;
  @Input() imageSlider: boolean;
  @Input() thumbnailImages: boolean;
  @Input() description: boolean;
  @Input() thumbnailVideo: boolean;

  public tourDetails: tours[];
  public tours: tours[];

  public getFlightParams: string[] = [];
  public getTravelTypeParams: string[] = [];
  public getRatingParams: string[] = [];
  public getTripDurationParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public tags: string[];

  public paginate: pagination; 
  public pageNo: number = 1;

  public icon: string = 'assets/images/icon/tour/tour-not-found.jpg';
  public title: string = 'tour';
  public descriptionData: string = 'no tours were found. modify your search and try again';

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
        items: 1
      }
    }
  }

  @Select(tourState.tour) tour$: Observable<tours[]>;

  constructor(
    private tourService: TourService,
    private config: NgbRatingConfig,
    private paginationService: PaginationService,
    public hotelService: HotelService,
    private router: Router,
    private route: ActivatedRoute){
      this.route.queryParams.subscribe((params) => {
        this.pageNo = params['page'] ? params['page'] : this.pageNo;
        this.getFlightParams = params['flight'] ? params['flight'].split(',') : [];
        this.getTravelTypeParams = params['travel_type'] ? params['travel_type'].split(',') : [];
        this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
        this.getTripDurationParams = params['trip_duration'] ? params['trip_duration'].split(',') : [];
        this.minPrice = params['minPrice'] ? params['minPrice'] : [];
        this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];

        this.tags = [...this.getFlightParams, ...this.getTravelTypeParams, ...this.getRatingParams, ...this.getTripDurationParams]

        // Rating
        this.config.max = 5;
        this.config.readonly = true;

        this.tour$.subscribe((res) => {
          this.tourDetails = res

          if(this.tourDetails){
            this.tours = this.tourDetails.filter((data) => {
              if(this.selectedTabValue == 'all'){
                return data
              }else{
                return data.category == this.selectedTabValue;
              }
            })
            // Pagination
          this.paginate = this.paginationService.getPager(this.tours?.length, +this.pageNo );

          this.tours = this.tours?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);
          }
        })
      })
  }

  ngOnChanges(){

  if(this.tourDetails){
      this.tours = this.tourDetails.filter((data) => {
        if(this.selectedTabValue == 'all'){
          return data
        }else{
          return data.category == this.selectedTabValue;
        }
      })
    }
    // Pagination
      this.paginate = this.paginationService.getPager(this.tours?.length, +this.pageNo );

      this.tours = this.tours?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);
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

  openResponsiveFilter(){
    this.tourService.isOpenResponsiveFilter = true;
  }

}
