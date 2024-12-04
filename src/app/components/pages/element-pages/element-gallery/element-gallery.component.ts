import { Component } from '@angular/core';
import { homeSectionModel } from '../../../../shared/interface/hotel-classic';
import { tourModern } from '../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../shared/services/hotel.service';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TourModernGalleryComponent } from '../../../home/tour-demo/tour-demo-modern/tour-modern-gallery/tour-modern-gallery.component';
import { HotelClassicGalleryComponent } from '../../../home/hotel-demo/hotel-demo-classic/hotel-classic-gallery/hotel-classic-gallery.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-gallery',
    templateUrl: './element-gallery.component.html',
    styleUrl: './element-gallery.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, HotelClassicGalleryComponent, TourModernGalleryComponent, FooterComponent, LayoutComponent]
})
export class ElementGalleryComponent {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'gallery';
  public parent = 'elements';
  public child = 'gallery';

  public homeSectionData: homeSectionModel;
  public tourModern: tourModern;

  constructor(private hotelService: HotelService, private tourService: TourService){
    this.hotelService.hotelClassic().subscribe(response => {
      this.homeSectionData = response;
    });

    this.tourService.tourModern().subscribe(response => {
      this.tourModern = response;
    })
  }
}
