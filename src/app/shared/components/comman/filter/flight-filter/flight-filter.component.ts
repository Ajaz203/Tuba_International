import { Component } from '@angular/core';
import { FlightService } from '../../../../../shared/services/flight.service';
import { priceFilter } from '../../../../../shared/interface/hotel';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { getFlights } from '../../../../../shared/store/action/flight.action';
import { FlightArrivalTimeComponent } from './widgets/flight-arrival-time/flight-arrival-time.component';
import { FlightDepartureTimeComponent } from './widgets/flight-departure-time/flight-departure-time.component';
import { FlightAirlinesComponent } from './widgets/flight-airlines/flight-airlines.component';
import { FlightPriceComponent } from './widgets/flight-price/flight-price.component';
import { FlightStopsComponent } from './widgets/flight-stops/flight-stops.component';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-flight-filter',
    templateUrl: './flight-filter.component.html',
    styleUrl: './flight-filter.component.scss',
    standalone: true,
    imports: [NgStyle, FlightStopsComponent, FlightPriceComponent, FlightAirlinesComponent, FlightDepartureTimeComponent, FlightArrivalTimeComponent]
})
export class FlightFilterComponent {

  public isOpenStops: boolean = true;
  public isOpenPrice: boolean = true;
  public isOpenAirLines: boolean = true;
  public isOpenDepartureTime: boolean = true;
  public isOpenArrivalTime: boolean = true;
  public isOpenFilter: boolean = true;

  public getStopParams: string[] = [];
  public getAirlineParams: string[] = [];
  public getArrivalTimeParams: string[] = [];
  public getDepartureTimeParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public priceData: priceFilter;
  public paramsTag: string[];

  constructor(
    public flightService: FlightService,
    private route: ActivatedRoute,
    private store: Store){
    this.flightService.isOpenResponsiveFilter = false;

    this.route.queryParams.subscribe((params) => {
        this.getStopParams = params['stop'] ? params['stop'].split(',') : [];
        this.getAirlineParams = params['airline'] ? params['airline'].split(',') : [];
        this.getArrivalTimeParams = params['arrival_time'] ? params['arrival_time'].split(',') : [];
        this.getDepartureTimeParams = params['departure_time'] ? params['departure_time'].split(',') : [];
        this.minPrice = params['minPrice'] ? params['minPrice'] : [];
        this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];
        this.priceData = {
          minPrice: this.minPrice,
          maxPrice: this.maxPrice
        }

        this.paramsTag = [...this.getStopParams, ...this.getAirlineParams, ...this.getArrivalTimeParams, ...this.getDepartureTimeParams];

        this.store.dispatch(new getFlights(this.paramsTag, this.priceData));

      })
  }

  openFilter(){
    this.isOpenFilter =! this.isOpenFilter;
  }

  openStops(){
    this.isOpenStops =! this.isOpenStops;
  }

  openPrice(){
    this.isOpenPrice =! this.isOpenPrice;
  }

  openAirLines(){
    this.isOpenAirLines =! this.isOpenAirLines;
  }

  openDepartureTime(){
    this.isOpenDepartureTime =! this.isOpenDepartureTime;
  }

  openArrivalTime(){
    this.isOpenArrivalTime =! this.isOpenArrivalTime;
  }

  closeResponsiveFilter(){
    this.flightService.isOpenResponsiveFilter = false;
  }
}
