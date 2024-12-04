import { Component } from '@angular/core';
import { ClickOutsideDirective } from '../../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-tour-single-page-filter',
    templateUrl: './tour-single-page-filter.component.html',
    styleUrl: './tour-single-page-filter.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective]
})
export class TourSinglePageFilterComponent {

  public adults = 1;
  public child = 1;

  public isShow: boolean = false;

  open(){
    this.isShow =! this.isShow;
  }

  changeValue(value: string, number:number){
    if(number == -1){
      if(value == 'adult' && this.adults > 1){
        this.adults -= 1;
      }else if(value == 'children' && this.child > 1){
        this.child -= 1;
      }
    }else if(number == 1){
      if(value == 'adult'){
        this.adults += 1;
      }else if(value == 'children'){
        this.child += 1;
      }
    }
  }

  clickOutside(): void {
    this.isShow = false;
  }
}
