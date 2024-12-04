import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TourBookingDetailsComponent } from '../widgets/tour-booking-details/tour-booking-details.component';
import { BookingComponent } from '../../../../shared/components/comman/booking/booking.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-tour-checkout',
    templateUrl: './tour-checkout.component.html',
    styleUrl: './tour-checkout.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, AnimationComponent, BookingComponent, TourBookingDetailsComponent, FooterComponent, LayoutComponent]
})
export class TourCheckoutComponent {
  
  public bg_image = 'assets/images/tour/spain4.jpg';
  public title = 'checkout';
  public parent = 'Home';
  public subParent = "review"
  public child = 'checkout';

  constructor() {}
  
}
