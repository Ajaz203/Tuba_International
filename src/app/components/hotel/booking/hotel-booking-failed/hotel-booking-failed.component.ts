import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-hotel-booking-failed',
    templateUrl: './hotel-booking-failed.component.html',
    styleUrls: ['./hotel-booking-failed.component.scss'],
    standalone: true,
    imports: [HeaderComponent, FooterComponent, LayoutComponent]
})
export class HotelBookingFailedComponent {
  
  constructor() {}
  
}
