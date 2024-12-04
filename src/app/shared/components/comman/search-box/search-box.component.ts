import { Component, Input } from '@angular/core';
import { FoodSearchBoxComponent } from './food-search-box/food-search-box.component';
import { CabSearchBoxComponent } from './cab-search-box/cab-search-box.component';
import { FlightSearchBoxTwoComponent } from './flight-search-box-two/flight-search-box-two.component';
import { HolidaySearchBoxComponent } from './holiday-search-box/holiday-search-box.component';
import { FlightSearchBoxComponent } from './flight-search-box/flight-search-box.component';
import { SearchBoxFiveComponent } from './search-box-five/search-box-five.component';
import { SearchBoxFourComponent } from './search-box-four/search-box-four.component';
import { SearchBoxThreeComponent } from './search-box-three/search-box-three.component';
import { SearchBoxTwoComponent } from './search-box-two/search-box-two.component';
import { SearchBoxOneComponent } from './search-box-one/search-box-one.component';

@Component({
    selector: 'app-search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
    standalone: true,
    imports: [SearchBoxOneComponent, SearchBoxTwoComponent, SearchBoxThreeComponent, SearchBoxFourComponent, SearchBoxFiveComponent, FlightSearchBoxComponent, HolidaySearchBoxComponent, FlightSearchBoxTwoComponent, CabSearchBoxComponent, FoodSearchBoxComponent]
})
export class SearchBoxComponent {

  @Input() type: string;
  @Input() text: boolean = false;
  @Input() borderClass: boolean = false;
  @Input() searchFix: boolean;
  @Input() selectedValue: string;
  @Input() shadow: boolean = true;

}
