import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FlightModernSubscribeComponent } from '../../../home/flight-demo/flight-demo-modern/flight-modern-subscribe/flight-modern-subscribe.component';
import { TourModernSubscribeComponent } from '../../../home/tour-demo/tour-demo-modern/tour-modern-subscribe/tour-modern-subscribe.component';
import { HotelClassicSubscribeComponent } from '../../../home/hotel-demo/hotel-demo-classic/hotel-classic-subscribe/hotel-classic-subscribe.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-subscribe',
    templateUrl: './element-subscribe.component.html',
    styleUrl: './element-subscribe.component.scss',
    standalone: true,
    imports: [HeaderComponent, HotelClassicSubscribeComponent, TourModernSubscribeComponent, FlightModernSubscribeComponent, FooterComponent, LayoutComponent]
})
export class ElementSubscribeComponent {
  
  constructor(){}
  
}
