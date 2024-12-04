import { Component } from '@angular/core';
import { seatType } from '../../../../shared/components/data/data/flight';
import { RouterLink } from '@angular/router';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';

@Component({
    selector: 'app-flight-search',
    templateUrl: './flight-search.component.html',
    styleUrl: './flight-search.component.scss',
    standalone: true,
    imports: [ClickOutsideDirective, NgbInputDatepicker, RouterLink]
})
export class FlightSearchComponent {

  public seatType = seatType;

  public adults = 1;
  public child = 1;
  public isTraveler: boolean = false;

  openTraveler(){
    this.isTraveler =! this.isTraveler;
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
    this.isTraveler = false;
  }
}
