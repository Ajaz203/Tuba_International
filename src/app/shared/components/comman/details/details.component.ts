import { Component, Input } from '@angular/core';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { CabDetailsComponent } from './cab-details/cab-details.component';
import { CabListDetailsComponent } from './cab-list-details/cab-list-details.component';
import { FlightListDetailsComponent } from './flight-list-details/flight-list-details.component';
import { TourListDetailsComponent } from './tour-list-details/tour-list-details.component';
import { TourDetailsComponent } from './tour-details/tour-details.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HotelListDetailsComponent } from './hotel-list-details/hotel-list-details.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    standalone: true,
    imports: [HotelDetailsComponent, HotelListDetailsComponent, GoogleMapComponent, LeafletMapComponent, TourDetailsComponent, TourListDetailsComponent, FlightListDetailsComponent, CabListDetailsComponent, CabDetailsComponent, RestaurantDetailComponent]
})
export class DetailsComponent {

  @Input() type: string;
  @Input() selectedTabValue: string;
  @Input() gridType: string;
  @Input() responsiveLatestFilter: boolean;
  @Input() mapFilter: boolean;
  @Input() imageSlider: boolean = false;
  @Input() thumbnailImages: boolean = false;
  @Input() description: boolean = false;
  @Input() thumbnailVideo: boolean = false;
  @Input() includeText: boolean = true;
  @Input() calender: boolean = true;
  @Input() flightClass: boolean = false;
  @Input() roundTrip: boolean = false;
  @Input() marginClass: boolean = false;
  @Input() noSidebar: boolean = false;

}
