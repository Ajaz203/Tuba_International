import { Component } from '@angular/core';
import { tourTravelType } from '../../../../../../shared/components/data/data/filter/tour';
import { ActivatedRoute, Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-tour-travel-type',
    templateUrl: './tour-travel-type.component.html',
    styleUrls: ['./tour-travel-type.component.scss'],
    standalone: true,
    imports: [NgStyle]
})
export class TourTravelTypeComponent {

  public tourTravelType = tourTravelType;
  public isOpenTravelType: boolean = true;
  public selectedTravelType: string[] = []

  constructor(
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.selectedTravelType = params['travel_type'] ? params['travel_type'].split(",") : []
      })
    }

  openTravelType(){
    this.isOpenTravelType = !this.isOpenTravelType;
  }

  applyFilter(event: Event){
    const index = this.selectedTravelType.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedTravelType.push((event.target as HTMLInputElement).value)
    }else{
      this.selectedTravelType.splice(index,1)
    }

      this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { travel_type: this.selectedTravelType.length ? this.selectedTravelType.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedTravelType?.includes(item)){
      return true;
    }
    return false;
  }
}
