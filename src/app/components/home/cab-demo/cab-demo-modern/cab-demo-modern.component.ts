import { Component } from '@angular/core';
import { cabDetails, cabModern } from '../../../../shared/interface/cab-modern';
import { CabService } from '../../../../shared/services/cab.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CabModernBrandComponent } from './cab-modern-brand/cab-modern-brand.component';
import { CabModernBlogComponent } from './cab-modern-blog/cab-modern-blog.component';
import { CabModernApplicationComponent } from './cab-modern-application/cab-modern-application.component';
import { CabModernCallComponent } from './cab-modern-call/cab-modern-call.component';
import { CabModernBookingDealsComponent } from './cab-modern-booking-deals/cab-modern-booking-deals.component';
import { CabModernServiceComponent } from './cab-modern-service/cab-modern-service.component';
import { CabModernTicketSectionComponent } from './cab-modern-ticket-section/cab-modern-ticket-section.component';
import { CabModernCategoryComponent } from './cab-modern-category/cab-modern-category.component';
import { CabModernHomeSectionComponent } from './cab-modern-home-section/cab-modern-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-cab-demo-modern',
    templateUrl: './cab-demo-modern.component.html',
    styleUrls: ['./cab-demo-modern.component.scss'],
    standalone: true,
    imports: [HeaderComponent, CabModernHomeSectionComponent, CabModernCategoryComponent, CabModernTicketSectionComponent, CabModernServiceComponent, CabModernBookingDealsComponent, CabModernCallComponent, CabModernApplicationComponent, CabModernBlogComponent, CabModernBrandComponent, FooterComponent, LayoutComponent]
})
export class CabDemoModernComponent {
  
  public cabModern: cabModern;
  public cab: cabDetails[];

  constructor(private cabService: CabService) {
    this.cabService.cabModern().subscribe(response => {
      this.cabModern = response;
    })

    this.cabService.cabDetails().subscribe(response => {
      this.cab = response.cab;
    })
  }
}
