import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { tours } from "../../interface/tour";
import { TourService } from "../../services/tour.service";
import { getTours } from "../action/tour.action";

export class tourModal {
  data: {
    tour: tours[];
  };
}

@State<tourModal>({
  name: 'tour',
  defaults: {
    data: {
      tour: [],
    },
  },
})

@Injectable()
export class tourState{

  public tours: tours[];
  constructor(private tourService: TourService) {}

  @Selector()
  static tour(state: tourModal) {
    return state.data.tour;
  }

  @Action(getTours)
  getData( ctx: StateContext<tourModal>, action: getTours ){
    return this.tourService.getTourDetails(action.filter).pipe(
      tap((res) => {
        if (action.price.minPrice != 0 || action.price.maxPrice != 0 ) {
          this.tours = res.filter(
            (item: { price: number }) =>
              item.price >= action.price.minPrice && item.price <= action.price.maxPrice
          );
        }else {
          this.tours = res
        }

        ctx.setState({
          data: {
            tour: this.tours,
          },
        });

      })
    )
  }
}
