import { Component } from '@angular/core';
import { TourService } from '../../../../../shared/services/tour.service';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { getTours } from '../../../../../shared/store/action/tour.action';
import { TourTripDurationComponent } from './tour-trip-duration/tour-trip-duration.component';
import { TourBudgetComponent } from './tour-budget/tour-budget.component';
import { TourTravelTypeComponent } from './tour-travel-type/tour-travel-type.component';
import { TourFlightsComponent } from './tour-flights/tour-flights.component';
import { TourRatingComponent } from './tour-rating/tour-rating.component';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-tour-filter',
    templateUrl: './tour-filter.component.html',
    styleUrls: ['./tour-filter.component.scss'],
    standalone: true,
    imports: [NgStyle, TourRatingComponent, TourFlightsComponent, TourTravelTypeComponent, TourBudgetComponent, TourTripDurationComponent]
})
export class TourFilterComponent {

  public isOpenTour: boolean = true;
  public getFlightParams: string[] = [];
  public getTravelTypeParams: string[] = [];
  public getRatingParams: string[] = [];
  public getTripDurationParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public budgetData: priceFilter;
  public paramsTag: string[];

  constructor(
    public tourService: TourService,
    private route: ActivatedRoute,
    private store: Store){
      this.route.queryParams.subscribe((params) => {
        this.getFlightParams = params['flight'] ? params['flight'].split(',') : [];
        this.getTravelTypeParams = params['travel_type'] ? params['travel_type'].split(',') : [];
        this.getRatingParams = params['rating'] ? params['rating'].split(',') : [];
        this.getTripDurationParams = params['trip_duration'] ? params['trip_duration'].split(',') : [];
        this.minPrice = params['minPrice'] ? params['minPrice'] : [];
        this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
        this.budgetData = {
          minPrice: this.minPrice,
          maxPrice: this.maxPrice
        }

        this.paramsTag = [...this.getFlightParams, ...this.getTravelTypeParams, ...this.getRatingParams, ...this.getTripDurationParams];

        this.store.dispatch(new getTours(this.paramsTag, this.budgetData));

      })
    }

  openTour(){
    this.isOpenTour = !this.isOpenTour;
  }

  closeResponsiveFilter(){
    this.tourService.isOpenResponsiveFilter = false;
  }
}
