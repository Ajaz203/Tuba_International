import { Component } from '@angular/core';
import { cabClassic } from '../../../../shared/interface/cab-classic';
import { service } from '../../../../shared/interface/hotel-classic';
import { CabService } from '../../../../shared/services/cab.service';
import { HotelService } from '../../../../shared/services/hotel.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CabClassicricaBenefitsComponent } from '../../../home/cab-demo/cab-demo-classic/cab-classic-rica-benefits/cab-classic-rica-benefits.component';
import { ServicesComponent } from '../../../../shared/components/comman/services/services.component';
import { TitleComponent } from '../../../../shared/components/comman/title/title.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-service',
    templateUrl: './element-service.component.html',
    styleUrl: './element-service.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, AnimationComponent, TitleComponent, ServicesComponent, CabClassicricaBenefitsComponent, FooterComponent, LayoutComponent]
})
export class ElementServiceComponent {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'service';
  public parent = 'elements';
  public child = 'service';
  public description = "Trips, experiences, and places. All in one service.";

  public services: service[];
  public cabServices: service[];
  public hotelServices: service[];
  public tourService: service[];
  public cabClassic: cabClassic;

  public cabServiceId = [10,11,12];
  public hotelServiceId = [1,2,3,4,5,6];
  public tourServiceId = [7,8,9];

  constructor(private hotelService: HotelService, private cabService: CabService){
    this.hotelService.services().subscribe(response => {
      this.services = response.services;

      if (Array.isArray(this.cabServiceId)) {
       this.cabServices = this.services?.filter((item) => {
         return this.cabServiceId.includes(item.id)
       })
     }

     if (Array.isArray(this.hotelServiceId)) {
      this.hotelServices = this.services?.filter((item) => {
        return this.hotelServiceId.includes(item.id)
      })
    }

    if (Array.isArray(this.tourServiceId)) {
       this.tourService = this.services?.filter((item) => {
         return this.tourServiceId.includes(item.id)
       })
     }
    })

    this.cabService.cabClassic().subscribe(response => {
      this.cabClassic = response;
    })
  }
}
