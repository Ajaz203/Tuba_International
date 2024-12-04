import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-tour-booking-success',
    templateUrl: './tour-booking-success.component.html',
    styleUrl: './tour-booking-success.component.scss',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, LayoutComponent]
})
export class TourBookingSuccessComponent {
  
  constructor() {}
  
}
