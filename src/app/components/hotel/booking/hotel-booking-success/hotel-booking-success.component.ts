import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-hotel-booking-success',
    templateUrl: './hotel-booking-success.component.html',
    styleUrls: ['./hotel-booking-success.component.scss'],
    standalone: true,
    imports: [HeaderComponent, FooterComponent, LayoutComponent]
})
export class HotelBookingSuccessComponent {
  
  constructor() {}
  
}
