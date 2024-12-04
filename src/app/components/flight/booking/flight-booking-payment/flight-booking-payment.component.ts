import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FlightTravelAddonsComponent } from '../widgets/flight-travel-addons/flight-travel-addons.component';
import { BookingComponent } from '../../../../shared/components/comman/booking/booking.component';
import { FlightBookingBreadcrumbComponent } from '../widgets/flight-booking-breadcrumb/flight-booking-breadcrumb.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-flight-booking-payment',
    templateUrl: './flight-booking-payment.component.html',
    styleUrl: './flight-booking-payment.component.scss',
    standalone: true,
    imports: [HeaderComponent, FlightBookingBreadcrumbComponent, BookingComponent, FlightTravelAddonsComponent, FooterComponent, LayoutComponent]
})
export class FlightBookingPaymentComponent {
  
  public bg_image = "assets/images/flights/flight-breadcrumb2.jpg";
  public parent = "review";
  public subParent = "addons";
  public child = "payment";

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
