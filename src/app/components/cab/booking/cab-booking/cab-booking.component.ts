import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../shared/pipe/currency.pipe';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CabPromoCodeComponent } from '../widgets/cab-promo-code/cab-promo-code.component';
import { CabBookingSummaryComponent } from '../widgets/cab-booking-summary/cab-booking-summary.component';
import { CabInformationComponent } from '../widgets/cab-information/cab-information.component';
import { BookingFormComponent } from '../../../../shared/components/comman/booking/booking-form/booking-form.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cab-booking',
    templateUrl: './cab-booking.component.html',
    styleUrl: './cab-booking.component.scss',
    standalone: true,
    imports: [CommonModule, HeaderComponent, BreadcrumbsComponent, BookingFormComponent, CabInformationComponent, CabBookingSummaryComponent, CabPromoCodeComponent, FooterComponent, LayoutComponent, CurrencySymbolPipe]
})
export class CabBookingComponent implements OnInit {

  public showBookingForm = true;

  public bg_image = '/assets/imges2/car-banner.jpg';
  public title = 'cab booking';
  public parent = 'Home';
  public child = 'cab booking';

  constructor(public hotelService: HotelService) {}

  ngOnInit(){
    this.showBookingForm = true;
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','233, 179, 14');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
  showBookingFormHandler() {
    this.showBookingForm = true;
  }
}
