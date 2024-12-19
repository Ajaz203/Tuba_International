import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TourBookingDetailsComponent } from '../widgets/tour-booking-details/tour-booking-details.component';
import { BookingFormComponent } from '../../../../shared/components/comman/booking/booking-form/booking-form.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-tour-booking',
    templateUrl: './tour-booking.component.html',
    styleUrl: './tour-booking.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, AnimationComponent, BookingFormComponent, TourBookingDetailsComponent, FooterComponent, LayoutComponent]
})
export class TourBookingComponent {
  
  public bg_image = 'assets/imges2/spain4.jpg';
  public title = 'review';
  public parent = 'Home';
  public subParent = "holidays"
  public child = 'review';

  constructor() {}
  
}
