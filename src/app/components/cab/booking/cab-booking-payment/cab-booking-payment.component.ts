import { Component } from '@angular/core';
import { HotelService } from '../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../shared/pipe/currency.pipe';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CabPromoCodeComponent } from '../widgets/cab-promo-code/cab-promo-code.component';
import { CabBookingSummaryComponent } from '../widgets/cab-booking-summary/cab-booking-summary.component';
import { BookingComponent } from '../../../../shared/components/comman/booking/booking.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-cab-booking-payment',
    templateUrl: './cab-booking-payment.component.html',
    styleUrl: './cab-booking-payment.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, BookingComponent, CabBookingSummaryComponent, CabPromoCodeComponent, FooterComponent, LayoutComponent, CurrencySymbolPipe]
})
export class CabBookingPaymentComponent {
  
  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'cab payment';
  public parent = 'Home';
  public child = 'cab payment';

  constructor(public hotelService: HotelService) {
    
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','233, 179, 14');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
