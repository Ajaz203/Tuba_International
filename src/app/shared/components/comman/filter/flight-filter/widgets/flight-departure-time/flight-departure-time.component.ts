import { Component } from '@angular/core';
import { flightDepartureTime } from '../../../../../../../shared/components/data/data/filter/flight';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-flight-departure-time',
    templateUrl: './flight-departure-time.component.html',
    styleUrl: './flight-departure-time.component.scss',
    standalone: true
})
export class FlightDepartureTimeComponent {

  public flightDepartureTime = flightDepartureTime;
  public selectedDepartureTime: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.selectedDepartureTime = params['departure_time'] ? params['departure_time'].split(",") : []
      })
    }

    applyFilter(event: Event){
    const index = this.selectedDepartureTime.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedDepartureTime.push((event.target as HTMLInputElement).value)
    }else{
      this.selectedDepartureTime.splice(index,1)
    }

      this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { departure_time: this.selectedDepartureTime.length ? this.selectedDepartureTime.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedDepartureTime?.includes(item)){
      return true;
    }
    return false;
  }

}
