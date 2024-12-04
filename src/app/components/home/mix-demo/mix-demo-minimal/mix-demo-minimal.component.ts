import { Component } from '@angular/core';
import { hotelVector } from '../../../../shared/interface/hotel-vector';
import { HotelService } from '../../../../shared/services/hotel.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HotelVectorSubscribeComponent } from '../../hotel-demo/hotel-demo-vector/hotel-vector-subscribe/hotel-vector-subscribe.component';
import { HotelVectorBlogComponent } from '../../hotel-demo/hotel-demo-vector/hotel-vector-blog/hotel-vector-blog.component';
import { HotelVectorBookingComponent } from '../../hotel-demo/hotel-demo-vector/hotel-vector-booking/hotel-vector-booking.component';
import { HotelVectorPopularDestinationComponent } from '../../hotel-demo/hotel-demo-vector/hotel-vector-popular-destination/hotel-vector-popular-destination.component';
import { HotelVectorTopOffersComponent } from '../../hotel-demo/hotel-demo-vector/hotel-vector-top-offers/hotel-vector-top-offers.component';
import { MixMinimalHomeSectionComponent } from './mix-minimal-home-section/mix-minimal-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-mix-demo-minimal',
    templateUrl: './mix-demo-minimal.component.html',
    styleUrls: ['./mix-demo-minimal.component.scss'],
    standalone: true,
    imports: [HeaderComponent, MixMinimalHomeSectionComponent, HotelVectorTopOffersComponent, HotelVectorPopularDestinationComponent, HotelVectorBookingComponent, HotelVectorBlogComponent, HotelVectorSubscribeComponent, FooterComponent, LayoutComponent]
})
export class MixDemoMinimalComponent {
  
  public searchBoxType: string = 'basic';

  public hotelVector: hotelVector;

  constructor(private hotelService: HotelService) {
    this.hotelService.hotelVector().subscribe(response => {
      this.hotelVector = response;
    })
  }

  getValue(value: string){
    this.searchBoxType = value;
  }
}
