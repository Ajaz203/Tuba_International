import { Component } from '@angular/core';
import { response } from 'express';
import { cabModern } from '../../../../shared/interface/cab-modern';
import { flightModern } from '../../../../shared/interface/flight-modern';
import { homeSectionModel } from '../../../../shared/interface/hotel-classic';
import { mixClassic } from '../../../../shared/interface/mix-classic';
import { restaurantClassic } from '../../../../shared/interface/restaurant-classic';
import { category } from '../../../../shared/interface/tour-modern';
import { CabService } from '../../../../shared/services/cab.service';
import { FlightService } from '../../../../shared/services/flight.service';
import { HotelService } from '../../../../shared/services/hotel.service';
import { MixService } from '../../../../shared/services/mix.service';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TourModernSubscribeComponent } from '../../tour-demo/tour-demo-modern/tour-modern-subscribe/tour-modern-subscribe.component';
import { HotelClassicGalleryComponent } from '../../hotel-demo/hotel-demo-classic/hotel-classic-gallery/hotel-classic-gallery.component';
import { RestaurantClassicSpecialDishesComponent } from '../../restaurant-demo/restaurant-demo-classic/restaurant-classic-special-dishes/restaurant-classic-special-dishes.component';
import { HotelClassicVideoComponent } from '../../hotel-demo/hotel-demo-classic/hotel-classic-video/hotel-classic-video.component';
import { CabModernCallComponent } from '../../cab-demo/cab-demo-modern/cab-modern-call/cab-modern-call.component';
import { TourModernBannerComponent } from '../../tour-demo/tour-demo-modern/tour-modern-banner/tour-modern-banner.component';
import { FlightModernDestinationComponent } from '../../flight-demo/flight-demo-modern/flight-modern-destination/flight-modern-destination.component';
import { TourModernVideoComponent } from '../../tour-demo/tour-demo-modern/tour-modern-video/tour-modern-video.component';
import { MixClassicHotelComponent } from './mix-classic-hotel/mix-classic-hotel.component';
import { MixClassicCategoryComponent } from './mix-classic-category/mix-classic-category.component';
import { MixClassicHomeSectionComponent } from './mix-classic-home-section/mix-classic-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-mix-demo-classic',
    templateUrl: './mix-demo-classic.component.html',
    styleUrls: ['./mix-demo-classic.component.scss'],
    standalone: true,
    imports: [HeaderComponent, MixClassicHomeSectionComponent, MixClassicCategoryComponent, MixClassicHotelComponent, TourModernVideoComponent, FlightModernDestinationComponent, TourModernBannerComponent, CabModernCallComponent, HotelClassicVideoComponent, RestaurantClassicSpecialDishesComponent, HotelClassicGalleryComponent, TourModernSubscribeComponent, FooterComponent, LayoutComponent]
})
export class MixDemoClassicComponent {
  
  public mixClassic: mixClassic;
  public flightModern: flightModern;
  public cabModern: cabModern;
  public restaurantClassic: restaurantClassic;
  public category: category[];
  public homeSectionData: homeSectionModel;

  constructor(
    private mixService: MixService,
    private flightService: FlightService,
    private cabService: CabService,
    private restaurantService: RestaurantService,
    private tourService: TourService,
    private hotelService: HotelService
    ) {
    this.mixService.mixClassic().subscribe(response => {
      if(response){
        this.mixClassic = response;
      }
    })

    this.flightService.flightModern().subscribe(response => {
      return this.flightModern = response;
    })

    this.cabService.cabModern().subscribe(response => {
      this.cabModern = response;
    })

    this.restaurantService.restaurantClassic().subscribe(response => {
      this.restaurantClassic = response;
    })

    this.tourService.category().subscribe(response => {
      this.category = response.category
    })

     this.hotelService.hotelClassic().subscribe(response => {
      this.homeSectionData = response;
    });
  }
}
