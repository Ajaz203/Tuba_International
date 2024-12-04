import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HotelBookingDetailsComponent } from '../widgets/hotel-booking-details/hotel-booking-details.component';
import { BookingComponent } from '../../../../shared/components/comman/booking/booking.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-hotel-checkout',
    templateUrl: './hotel-checkout.component.html',
    styleUrls: ['./hotel-checkout.component.scss'],
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, AnimationComponent, BookingComponent, HotelBookingDetailsComponent, FooterComponent, LayoutComponent]
})
export class HotelCheckoutComponent {
  
  public bg_image = 'assets/images/inner-pages/bg-bread.jpg';
  public title = 'checkout';
  public parent = 'Home';
  public subParent = "review"
  public child = 'checkout';

  constructor() {}
  
}
