import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FlightPromoCodeComponent } from '../widgets/flight-promo-code/flight-promo-code.component';
import { FlightBookingSummaryComponent } from '../widgets/flight-booking-summary/flight-booking-summary.component';
import { FlightTravelInsuranceComponent } from '../widgets/flight-travel-insurance/flight-travel-insurance.component';
import { FlightTravellerDetailsComponent } from '../widgets/flight-traveller-details/flight-traveller-details.component';
import { FlightInformationComponent } from '../widgets/flight-information/flight-information.component';
import { SelectedFlightComponent } from '../widgets/selected-flight/selected-flight.component';
import { FlightBookingBreadcrumbComponent } from '../widgets/flight-booking-breadcrumb/flight-booking-breadcrumb.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-flight-booking',
    templateUrl: './flight-booking.component.html',
    styleUrl: './flight-booking.component.scss',
    standalone: true,
    imports: [HeaderComponent, FlightBookingBreadcrumbComponent, SelectedFlightComponent, FlightInformationComponent, FlightTravellerDetailsComponent, FlightTravelInsuranceComponent, FlightBookingSummaryComponent, FlightPromoCodeComponent, FooterComponent, LayoutComponent]
})
export class FlightBookingComponent {
  
  public bg_image = "assets/images/flights/flight-breadcrumb2.jpg";
  public parent = "Home";
  public subParent = "flights";
  public child = "review";

  constructor() {}

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','66, 145, 184');
    document.documentElement.style.setProperty('--theme-color2','66, 145, 184');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
