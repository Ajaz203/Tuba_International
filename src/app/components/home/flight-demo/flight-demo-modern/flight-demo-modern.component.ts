import { Component } from '@angular/core';
import { flightModern } from '../../../../shared/interface/flight-modern';
import { categoryModel } from '../../../../shared/interface/tour-modern';
import { FlightService } from '../../../../shared/services/flight.service';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FlightModernSubscribeComponent } from './flight-modern-subscribe/flight-modern-subscribe.component';
import { FlightModernBlogComponent } from './flight-modern-blog/flight-modern-blog.component';
import { FlightModernTopDestinationComponent } from './flight-modern-top-destination/flight-modern-top-destination.component';
import { FlightModernAirlineTicketComponent } from './flight-modern-airline-ticket/flight-modern-airline-ticket.component';
import { FlightModernBannerComponent } from './flight-modern-banner/flight-modern-banner.component';
import { FlightModernCategoryComponent } from './flight-modern-category/flight-modern-category.component';
import { FlightModernAirlinesDetailComponent } from './flight-modern-airlines-detail/flight-modern-airlines-detail.component';
import { FlightModernDestinationComponent } from './flight-modern-destination/flight-modern-destination.component';
import { FlightModernHomeSectionComponent } from './flight-modern-home-section/flight-modern-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-flight-demo-modern',
    templateUrl: './flight-demo-modern.component.html',
    styleUrls: ['./flight-demo-modern.component.scss'],
    standalone: true,
    imports: [HeaderComponent, FlightModernHomeSectionComponent, FlightModernDestinationComponent, FlightModernAirlinesDetailComponent, FlightModernCategoryComponent, FlightModernBannerComponent, FlightModernAirlineTicketComponent, FlightModernTopDestinationComponent, FlightModernBlogComponent, FlightModernSubscribeComponent, FooterComponent, LayoutComponent]
})
export class FlightDemoModernComponent {
  
  public flightModern: flightModern;
  public category: categoryModel;

  constructor(private flightService: FlightService, public tourService: TourService) {
    this.flightService.flightModern().subscribe(response => {
      return this.flightModern = response;
    })

    this.tourService.category().subscribe(response => {
      return this.category = response;
    })
  }

  getAirlineImage(imgPath: string): string {
    return imgPath ? `assets/images/airlines/${imgPath}` : 'assets/images/airlines/default-airline.png';
  }
}
