import { Component } from '@angular/core';
import { flightFare } from '../../../../../../../shared/components/data/data/filter/flight';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-flight-fare',
    templateUrl: './flight-fare.component.html',
    styleUrl: './flight-fare.component.scss',
    standalone: true
})
export class FlightFareComponent {

  public flightFare = flightFare;
  public selectedFare: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.selectedFare = params['fare'] ? params['fare'].split(",") : []
      })
    }

    applyFilter(event: Event){
    const index = this.selectedFare.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedFare.push((event.target as HTMLInputElement).value)
    }else{
      this.selectedFare.splice(index,1)
    }

      this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { fare: this.selectedFare.length ? this.selectedFare.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedFare?.includes(item)){
      return true;
    }
    return false;
  }

}
