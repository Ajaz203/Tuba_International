import { Component, Input } from '@angular/core';
import { hotelFacility } from '../../../../../../shared/components/data/data/filter/hotel';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-hotel-facility',
    templateUrl: './hotel-facility.component.html',
    styleUrls: ['./hotel-facility.component.scss'],
    standalone: true,
    imports: [NgStyle]
})
export class HotelFacilityComponent {

  public isOpenFacility: boolean = true;
  public hotelFacility = hotelFacility;
  public selectedFacility: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.selectedFacility = params['facility'] ? params['facility'].split(",") : []
      })
    }


   openFacility(){
    this.isOpenFacility =! this.isOpenFacility;
  }

  applyFilter(event: Event){
    const index = this.selectedFacility.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedFacility.push((event.target as HTMLInputElement).value)
    }else{
      this.selectedFacility.splice(index,1)
    }

      this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { facility: this.selectedFacility.length ? this.selectedFacility.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedFacility?.includes(item)){
      return true;
    }
    return false;
  }

}
