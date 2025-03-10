import { Component } from '@angular/core';
import { cabDetails, cabModern } from '../../../../shared/interface/cab-modern';
import { CabService } from '../../../../shared/services/cab.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TourModernVideoComponent } from '../../../home/tour-demo/tour-demo-modern/tour-modern-video/tour-modern-video.component';
import { HotelClassicVideoComponent } from '../../../home/hotel-demo/hotel-demo-classic/hotel-classic-video/hotel-classic-video.component';
import { CabModernTicketSectionComponent } from '../../../home/cab-demo/cab-demo-modern/cab-modern-ticket-section/cab-modern-ticket-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-video',
    templateUrl: './element-video.component.html',
    styleUrl: './element-video.component.scss',
    standalone: true,
    imports: [HeaderComponent, CabModernTicketSectionComponent, HotelClassicVideoComponent, TourModernVideoComponent, FooterComponent, LayoutComponent]
})
export class ElementVideoComponent {
  
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
