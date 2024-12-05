import { Component } from '@angular/core';
import { cabClassic } from '../../../../shared/interface/cab-classic';
import { CabService } from '../../../../shared/services/cab.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CabClassicBrandComponent } from './cab-classic-brand/cab-classic-brand.component';
import { CabClassicTestimonialComponent } from './cab-classic-testimonial/cab-classic-testimonial.component';
import { CabClassicBannerComponent } from './cab-classic-banner/cab-classic-banner.component';
import { CabClassicCarTypeComponent } from './cab-classic-car-type/cab-classic-car-type.component';
import { CabClassicBookingComponent } from './cab-classic-booking/cab-classic-booking.component';
import { CabClassicricaBenefitsComponent } from './cab-classic-rica-benefits/cab-classic-rica-benefits.component';
import { CabClassicHomeSectionComponent } from './cab-classic-home-section/cab-classic-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-cab-demo-classic',
    templateUrl: './cab-demo-classic.component.html',
    styleUrls: ['./cab-demo-classic.component.scss'],
    standalone: true,
    imports: [HeaderComponent, CabClassicHomeSectionComponent, CabClassicricaBenefitsComponent, CabClassicBookingComponent, CabClassicCarTypeComponent, CabClassicBannerComponent, CabClassicTestimonialComponent, CabClassicBrandComponent, FooterComponent, LayoutComponent]
})
export class CabDemoClassicComponent {
  
  public cabClassic: cabClassic;

  constructor(private cabService: CabService) {
    this.cabService.cabClassic().subscribe(response => {
      this.cabClassic = response;
    })
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','239, 63, 62');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
