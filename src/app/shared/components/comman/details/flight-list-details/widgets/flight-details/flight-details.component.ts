import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { pagination } from '../../../../../../../shared/interface/cab';
import { flight } from '../../../../../../../shared/interface/flight';
import { HotelService } from '../../../../../../../shared/services/hotel.service';
import { PaginationService } from '../../../../../../../shared/services/pagination.service';
import { flightState } from '../../../../../../../shared/store/state/flight.state';
import { CurrencySymbolPipe } from '../../../../../../pipe/currency.pipe';
import { PaginationComponent } from '../../../../../ui/pagination/pagination.component';
import { NoDataComponent } from '../../../../../ui/no-data/no-data.component';

@Component({
    selector: 'app-flight-details',
    templateUrl: './flight-details.component.html',
    styleUrl: './flight-details.component.scss',
    standalone: true,
    imports: [RouterLink, NoDataComponent, PaginationComponent, CurrencySymbolPipe]
})
export class FlightDetailsComponent {

  @Input() flightClass: boolean;
  @Input() roundTrip: boolean;
  @Input() from: boolean = false;
  @Input() to: boolean = false;

  @Output() tagData = new EventEmitter<string[]>();

  public flightDetails: flight[];
  public paginate: pagination; 
  public pageNo: number = 1;

  public getStopParams: string[] = [];
  public getAirlineParams: string[] = [];
  public getArrivalTimeParams: string[] = [];
  public getDepartureTimeParams: string[] = [];
  public minPrice: number;
  public maxPrice: number;
  public tags: string[];

  public icon: string = 'assets/images/flights/plane.png';
  public title: string = 'flight';
  public description: string = 'no flights were found for this route and date combination. modify your search and try again';

  @Select(flightState.flight) flight$: Observable<flight[]>;

  constructor(
    private paginationService: PaginationService,
    public hotelService: HotelService,
    private router: Router,
    private route: ActivatedRoute){
    this.route.queryParams.subscribe((params) => {
      this.pageNo = params['page'] ? params['page'] : this.pageNo;
      this.getStopParams = params['stop'] ? params['stop'].split(',') : [];
      this.getAirlineParams = params['airline'] ? params['airline'].split(',') : [];
      this.getArrivalTimeParams = params['arrival_time'] ? params['arrival_time'].split(',') : [];
      this.getDepartureTimeParams = params['departure_time'] ? params['departure_time'].split(',') : [];
      this.minPrice = params['minPrice'] ? params['minPrice'] : [];
      this.maxPrice = params['maxPrice'] ? params['maxPrice'] : [];

      this.tags = [...this.getStopParams, ...this.getAirlineParams, ...this.getArrivalTimeParams, ...this.getDepartureTimeParams];
      this.tagData.emit(this.tags)

      this.flight$.subscribe((res) => {
        this.flightDetails = res

        this.paginate = this.paginationService.getPager(this.flightDetails?.length, +this.pageNo, 7 );

        this.flightDetails = this.flightDetails?.slice(this.paginate.startIndex,this.paginate.endIndex + 1);

      })
    })
  }

  setPage(page: number){
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: page },
      queryParamsHandling: "merge"
    });
  }

  selectFlight(id: number){
    if(this.from == true){
      this.flightDetails.forEach((data) => {
        if(data.id == id){
          if(!data.activeFrom){
            data.activeFrom = true;
          }
        }else{
          data.activeFrom = false;
        }
      })
    }else if(this.to == true){
      this.flightDetails.forEach((data) => {
        if(data.id == id){
          if(!data.activeTo){
            data.activeTo = true;
          }
        }else{
          data.activeTo = false;
        }
      })
    }
  }
}
