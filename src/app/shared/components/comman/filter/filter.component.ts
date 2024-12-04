import { Component, Input } from '@angular/core';
import { RestaurantFilterComponent } from './restaurant-filter/restaurant-filter.component';
import { CabFilterComponent } from './cab-filter/cab-filter.component';
import { FlightFilterTwoComponent } from './flight-filter-two/flight-filter-two.component';
import { FlightFilterComponent } from './flight-filter/flight-filter.component';
import { TourFilterHorizontalComponent } from './tour-filter-horizontal/tour-filter-horizontal.component';
import { TourFilterComponent } from './tour-filter/tour-filter.component';
import { HotelFilterHorizontalComponent } from './hotel-filter-horizontal/hotel-filter-horizontal.component';
import { HotelFilterComponent } from './hotel-filter/hotel-filter.component';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    standalone: true,
    imports: [HotelFilterComponent, HotelFilterHorizontalComponent, TourFilterComponent, TourFilterHorizontalComponent, FlightFilterComponent, FlightFilterTwoComponent, CabFilterComponent, RestaurantFilterComponent]
})
export class FilterComponent {

  @Input() type: string;
  @Input() mapFilter: boolean;

  @Input() district: boolean = true;
  @Input() facility: boolean = true;
  @Input() rating: boolean = true;
  @Input() price: boolean = true;
  @Input() language: boolean = true;
  @Input() hotels: boolean = false;
  @Input() cabHorizontal: boolean = false;
  @Input() shadowClass: boolean = false;
  @Input() horizontalFilter: boolean = false;
  @Input() tags: boolean = true;
  @Input() restaurant: boolean = false;
  @Input() cuisines: boolean = true;
  @Input() time: boolean = true
}
