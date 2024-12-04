import { Component } from '@angular/core';
import { flightAirlines } from '../../../../../../../shared/components/data/data/filter/flight';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-flight-airlines',
    templateUrl: './flight-airlines.component.html',
    styleUrl: './flight-airlines.component.scss',
    standalone: true
})
export class FlightAirlinesComponent {

  public flightAirlines = flightAirlines;
  public selectedAirlines: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.selectedAirlines = params['airline'] ? params['airline'].split(",") : []
      })
    }

    applyFilter(event: Event){
    const index = this.selectedAirlines.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedAirlines.push((event.target as HTMLInputElement).value)
    }else{
      this.selectedAirlines.splice(index,1)
    }

      this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { airline: this.selectedAirlines.length ? this.selectedAirlines.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedAirlines?.includes(item)){
      return true;
    }
    return false;
  }

}
