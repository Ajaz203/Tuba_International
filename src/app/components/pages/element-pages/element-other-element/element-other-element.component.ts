import { Component } from '@angular/core';
import { cabModern } from '../../../../shared/interface/cab-modern';
import { homeSectionModel } from '../../../../shared/interface/hotel-classic';
import { CabService } from '../../../../shared/services/cab.service';
import { HotelService } from '../../../../shared/services/hotel.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CabModernBrandComponent } from '../../../home/cab-demo/cab-demo-modern/cab-modern-brand/cab-modern-brand.component';
import { HotelClassicSocialGalleryComponent } from '../../../home/hotel-demo/hotel-demo-classic/hotel-classic-social-gallery/hotel-classic-social-gallery.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-other-element',
    templateUrl: './element-other-element.component.html',
    styleUrl: './element-other-element.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, HotelClassicSocialGalleryComponent, CabModernBrandComponent, FooterComponent, LayoutComponent]
})
export class ElementOtherElementComponent {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'other element';
  public parent = 'elements';
  public child = 'other element';

  public homeSectionData: homeSectionModel;
  public cabModern: cabModern;

  constructor(private hotelService: HotelService, private cabService: CabService){
    this.hotelService.hotelClassic().subscribe(response => {
      this.homeSectionData = response;
    });

    this.cabService.cabModern().subscribe(response => {
      this.cabModern = response;
    })
  }
}
