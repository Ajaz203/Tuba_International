import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FlightModernBannerComponent } from '../../../home/flight-demo/flight-demo-modern/flight-modern-banner/flight-modern-banner.component';
import { TourModernBannerComponent } from '../../../home/tour-demo/tour-demo-modern/tour-modern-banner/tour-modern-banner.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-full-banner',
    templateUrl: './element-full-banner.component.html',
    styleUrl: './element-full-banner.component.scss',
    standalone: true,
    imports: [HeaderComponent, TourModernBannerComponent, FlightModernBannerComponent, FooterComponent, LayoutComponent]
})
export class ElementFullBannerComponent {
  
  constructor(){}
  
}
