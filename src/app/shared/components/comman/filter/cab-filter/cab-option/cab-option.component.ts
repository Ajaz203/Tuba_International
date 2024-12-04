import { Component } from '@angular/core';
import { cabOptions } from '../../../../../../shared/components/data/data/filter/cab';
import { ActivatedRoute, Router } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-cab-option',
    templateUrl: './cab-option.component.html',
    styleUrl: './cab-option.component.scss',
    standalone: true,
    imports: [NgStyle]
})
export class CabOptionComponent {

  public cabOptions = cabOptions;

  public isOpenOption: boolean = true;
  public selectedCarOption: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router){
      this.route.queryParams.subscribe((params) => {
        this.selectedCarOption = params['car_option'] ? params['car_option'].split(",") : []
      })
    }

    applyFilter(event: Event){
    const index = this.selectedCarOption.indexOf((event.target as HTMLInputElement).value);  // checked and unchecked value

    if((event.target as HTMLInputElement).checked){
      this.selectedCarOption.push((event.target as HTMLInputElement).value)
    }else{
      this.selectedCarOption.splice(index,1)
    }

      this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { car_option: this.selectedCarOption.length ? this.selectedCarOption.join(",") : null },
      queryParamsHandling: 'merge', // preserve the existing query params in the route
      skipLocationChange: false  // do trigger navigation
    });
  }

  // check if the item are selected
  checked(item: string){
    if(this.selectedCarOption?.includes(item)){
      return true;
    }
    return false;
  }

  openOption(){
    this.isOpenOption =! this.isOpenOption;
  }
}
