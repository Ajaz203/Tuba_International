import { Component } from '@angular/core';
import { flightArrivalTime } from '../../../../../../../shared/components/data/data/filter/flight';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-flight-arrival-time',
    templateUrl: './flight-arrival-time.component.html',
    styleUrl: './flight-arrival-time.component.scss',
    standalone: true
})
export class FlightArrivalTimeComponent {

  public flightArrivalTime = flightArrivalTime;
  public selectedArrivalTime: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.selectedArrivalTime = params['arrival_time'] ? params['arrival_time'].split(",") : []
      })
    }

    applyFilter(event: Event){
    const index = this.selectedArrivalTime.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedArrivalTime.push((event.target as HTMLInputElement).value)
    }else{
      this.selectedArrivalTime.splice(index,1)
    }

      this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { arrival_time: this.selectedArrivalTime.length ? this.selectedArrivalTime.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedArrivalTime?.includes(item)){
      return true;
    }
    return false;
  }

}
