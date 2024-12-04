import { Component } from '@angular/core';
import { homeSectionModel, specialRoom } from '../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../shared/services/hotel.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HotelClassicSocialGalleryComponent } from './hotel-classic-social-gallery/hotel-classic-social-gallery.component';
import { HotelClassicTestimonialComponent } from './hotel-classic-testimonial/hotel-classic-testimonial.component';
import { HotelClassicSubscribeComponent } from './hotel-classic-subscribe/hotel-classic-subscribe.component';
import { HotelClassicServiceComponent } from './hotel-classic-service/hotel-classic-service.component';
import { HotelClassicVideoComponent } from './hotel-classic-video/hotel-classic-video.component';
import { HotelClassicSpecialRoomsComponent } from './hotel-classic-special-rooms/hotel-classic-special-rooms.component';
import { HotelClassicGalleryComponent } from './hotel-classic-gallery/hotel-classic-gallery.component';
import { HotelClassicTicketSectionComponent } from './hotel-classic-ticket-section/hotel-classic-ticket-section.component';
import { HotelClassicAboutHotelComponent } from './hotel-classic-about-hotel/hotel-classic-about-hotel.component';
import { HotelClassicHomeSectionComponent } from './hotel-classic-home-section/hotel-classic-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-hotel-demo-classic',
    templateUrl: './hotel-demo-classic.component.html',
    styleUrls: ['./hotel-demo-classic.component.scss'],
    standalone: true,
    imports: [HeaderComponent, HotelClassicHomeSectionComponent, HotelClassicAboutHotelComponent, HotelClassicTicketSectionComponent, HotelClassicGalleryComponent, HotelClassicSpecialRoomsComponent, HotelClassicVideoComponent, HotelClassicServiceComponent, HotelClassicSubscribeComponent, HotelClassicTestimonialComponent, HotelClassicSocialGalleryComponent, FooterComponent, LayoutComponent]
})
export class HotelDemoClassicComponent {
  
  public homeSectionData: homeSectionModel;
  public specialRooms: specialRoom[];

  constructor(private hotelService: HotelService) {}

  ngOnInit(){
    this.hotelService.hotelClassic().subscribe(response => {
      this.homeSectionData = response;
    });

    this.hotelService.hotelRooms().subscribe(response => {
      this.specialRooms = response.hotelRooms;
    })
  }
}
