import { Component } from '@angular/core';
import { cabDetails, cabModern } from '../../../../shared/interface/cab-modern';
import { homeSectionModel } from '../../../../shared/interface/hotel-classic';
import { CabService } from '../../../../shared/services/cab.service';
import { HotelService } from '../../../../shared/services/hotel.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { RestaurantClassicOurRestaurantComponent } from '../../../home/restaurant-demo/restaurant-demo-classic/restaurant-classic-our-restaurant/restaurant-classic-our-restaurant.component';
import { HotelClassicAboutHotelComponent } from '../../../home/hotel-demo/hotel-demo-classic/hotel-classic-about-hotel/hotel-classic-about-hotel.component';
import { CabModernCallComponent } from '../../../home/cab-demo/cab-demo-modern/cab-modern-call/cab-modern-call.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-about',
    templateUrl: './element-about.component.html',
    styleUrl: './element-about.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, CabModernCallComponent, HotelClassicAboutHotelComponent, RestaurantClassicOurRestaurantComponent, FooterComponent, LayoutComponent]
})
export class ElementAboutComponent {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'about';
  public parent = 'elements';
  public child = 'about';

  public cabModern: cabModern;
  public cab: cabDetails[];
  public homeSectionData: homeSectionModel;

  constructor(private cabService: CabService, private hotelService: HotelService){
    this.cabService.cabModern().subscribe(response => {
      this.cabModern = response;
    })

    this.cabService.cabDetails().subscribe(response => {
      this.cab = response.cab;
    })

    this.hotelService.hotelClassic().subscribe(response => {
      this.homeSectionData = response;
    });
  }
}
