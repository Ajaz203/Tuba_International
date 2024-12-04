import { Component, EventEmitter, Input, Output } from '@angular/core';
import { hotelDistrict } from '../../../../../../shared/components/data/data/filter/hotel';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-hotel-district',
    templateUrl: './hotel-district.component.html',
    styleUrls: ['./hotel-district.component.scss'],
    standalone: true,
    imports: [NgStyle]
})
export class HotelDistrictComponent {

  public isOpenDistrict: boolean = true;
  public hotelDistrict = hotelDistrict;
  public selectedDistrict: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.selectedDistrict = params['district'] ? params['district'].split(",") : []
      })
    }

  openDistrict(){
    this.isOpenDistrict =! this.isOpenDistrict;
  }

  applyFilter(event: Event){
    const index = this.selectedDistrict.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedDistrict.push((event.target as HTMLInputElement).value)
    }else{
      this.selectedDistrict.splice(index,1)
    }

      this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { district: this.selectedDistrict.length ? this.selectedDistrict.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedDistrict?.includes(item)){
      return true;
    }
    return false;
  }
}
