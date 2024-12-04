import { Component } from '@angular/core';
import { flightStops } from '../../../../../../../shared/components/data/data/filter/flight';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-flight-stops',
    templateUrl: './flight-stops.component.html',
    styleUrl: './flight-stops.component.scss',
    standalone: true
})
export class FlightStopsComponent {

  public flightStops = flightStops;
  public selectedStops: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.selectedStops = params['stop'] ? params['stop'].split(",") : []
      })
    }

    applyFilter(event: Event){
    const index = this.selectedStops.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedStops.push((event.target as HTMLInputElement).value)
    }else{
      this.selectedStops.splice(index,1)
    }

      this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { stop: this.selectedStops.length ? this.selectedStops.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedStops?.includes(item)){
      return true;
    }
    return false;
  }

}
