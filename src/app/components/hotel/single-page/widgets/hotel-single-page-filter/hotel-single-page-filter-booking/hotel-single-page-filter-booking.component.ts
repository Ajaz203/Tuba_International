import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClickOutsideDirective } from '../../../../../../shared/directives/outside.directive';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-hotel-single-page-filter-booking',
    templateUrl: './hotel-single-page-filter-booking.component.html',
    styleUrls: ['./hotel-single-page-filter-booking.component.scss'],
    standalone: true,
    imports: [NgbInputDatepicker, ClickOutsideDirective, RouterLink]
})
export class HotelSinglePageFilterBookingComponent {

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
