import { Component } from '@angular/core';
import { ClickOutsideDirective } from '../../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-tour-page-booking-section',
    templateUrl: './tour-page-booking-section.component.html',
    styleUrl: './tour-page-booking-section.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective]
})
export class TourPageBookingSectionComponent {

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
