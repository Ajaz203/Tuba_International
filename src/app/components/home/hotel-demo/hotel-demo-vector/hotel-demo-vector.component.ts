import { Component } from '@angular/core';
import { hotelVector } from '../../../../shared/interface/hotel-vector';
import { HotelService } from '../../../../shared/services/hotel.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HotelVectorSubscribeComponent } from './hotel-vector-subscribe/hotel-vector-subscribe.component';
import { HotelVectorBlogComponent } from './hotel-vector-blog/hotel-vector-blog.component';
import { HotelVectorBookingComponent } from './hotel-vector-booking/hotel-vector-booking.component';
import { HotelVectorPopularDestinationComponent } from './hotel-vector-popular-destination/hotel-vector-popular-destination.component';
import { HotelVectorTopOffersComponent } from './hotel-vector-top-offers/hotel-vector-top-offers.component';
import { HotelVectorHomeSectionComponent } from './hotel-vector-home-section/hotel-vector-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-hotel-demo-vector',
    templateUrl: './hotel-demo-vector.component.html',
    styleUrls: ['./hotel-demo-vector.component.scss'],
    standalone: true,
    imports: [HeaderComponent, HotelVectorHomeSectionComponent, HotelVectorTopOffersComponent, HotelVectorPopularDestinationComponent, HotelVectorBookingComponent, HotelVectorBlogComponent, HotelVectorSubscribeComponent, FooterComponent, LayoutComponent]
})
export class HotelDemoVectorComponent {
  
  public hotelVector: hotelVector;

  constructor(private hotelService: HotelService) {
    this.hotelService.hotelVector().subscribe(response => {
      this.hotelVector = response;
    })
  }
}
