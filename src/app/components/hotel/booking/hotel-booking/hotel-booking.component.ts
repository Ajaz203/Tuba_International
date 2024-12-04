import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HotelBookingDetailsComponent } from '../widgets/hotel-booking-details/hotel-booking-details.component';
import { BookingFormComponent } from '../../../../shared/components/comman/booking/booking-form/booking-form.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-hotel-booking',
    templateUrl: './hotel-booking.component.html',
    styleUrls: ['./hotel-booking.component.scss'],
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, AnimationComponent, BookingFormComponent, HotelBookingDetailsComponent, FooterComponent, LayoutComponent]
})
export class HotelBookingComponent {
  
  public bg_image = 'assets/images/inner-pages/bg-bread.jpg';
  public title = 'review';
  public parent = 'Home';
  public subParent = "hotels"
  public child = 'review';

  constructor() {}
  
}
