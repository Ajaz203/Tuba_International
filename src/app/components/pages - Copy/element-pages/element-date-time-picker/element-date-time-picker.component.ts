import { Component } from '@angular/core';
import { flightLocation } from '../../../../shared/components/data/data/flight';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { ClickOutsideDirective } from '../../../../shared/directives/outside.directive';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-date-time-picker',
    templateUrl: './element-date-time-picker.component.html',
    styleUrl: './element-date-time-picker.component.scss',
    standalone: true,
    imports: [HeaderComponent, NgbInputDatepicker, OwlDateTimeModule,
       OwlNativeDateTimeModule,ClickOutsideDirective, FooterComponent, LayoutComponent]
})
export class ElementDateTimePickerComponent {
  
  public adults = 1;
  public child = 1;
  public isTraveler: boolean = false;

  public flightLocation = flightLocation;
  public isFrom: boolean = false;
  public fromLocation : string = '';

  constructor(){}

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

  openLocation(){
      this.isFrom =! this.isFrom;
  }

  selectLocation(id: number){
    this.flightLocation.filter((item) =>{
      if(item.id === id){
        this.fromLocation = item.city;
        this.isFrom = false;
      }
    })
  }

  clickOutside(): void {
    this.isTraveler = false;
    this.isFrom = false
  }
}
