import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { flight } from "../../interface/flight";
import { FlightService } from "../../services/flight.service";
import { getFlights } from "../action/flight.action";

export class flightModal {
  data: {
    flight: flight[];
  };
}

@State<flightModal>({
  name: 'flight',
  defaults: {
    data: {
      flight: [],
    },
  },
})

@Injectable()
export class flightState{

  public flights: flight[];
  constructor(private flightService: FlightService) {}

  @Selector()
  static flight(state: flightModal) {
    return state.data.flight;
  }

  @Action(getFlights)
  getData( ctx: StateContext<flightModal>, action: getFlights ){
    return this.flightService.getFlightDetails(action.filter).pipe(

      tap((res) => {
        if (action.price.minPrice  || action.price.maxPrice ) {
          this.flights = res.filter(
            (item: { price: number }) =>
              item.price >= action.price.minPrice && item.price <= action.price.maxPrice
          );
        }else {
          this.flights = res
        }

        ctx.setState({
          data: {
            flight: this.flights,
          },
        });

      })
    )
  }
}
