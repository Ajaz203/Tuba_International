import { Component } from '@angular/core';
import { hotelMinimal, hotels } from '../../../../shared/interface/hotel-minimal';
import { HotelService } from '../../../../shared/services/hotel.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HotelMinimalricaBenifitComponent } from './hotel-minimal-rica-benifit/hotel-minimal-rica-benifit.component';
import { HotelMinimalBlogComponent } from './hotel-minimal-blog/hotel-minimal-blog.component';
import { HotelMinimalApplicationComponent } from './hotel-minimal-application/hotel-minimal-application.component';
import { HotelMinimalTopDealsComponent } from './hotel-minimal-top-deals/hotel-minimal-top-deals.component';
import { HotelMinimalTopCityComponent } from './hotel-minimal-top-city/hotel-minimal-top-city.component';
import { HotelMinimalHomeSectionComponent } from './hotel-minimal-home-section/hotel-minimal-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-hotel-demo-minimal',
    templateUrl: './hotel-demo-minimal.component.html',
    styleUrls: ['./hotel-demo-minimal.component.scss'],
    standalone: true,
    imports: [HeaderComponent, HotelMinimalHomeSectionComponent, HotelMinimalTopCityComponent, HotelMinimalTopDealsComponent, HotelMinimalApplicationComponent, HotelMinimalBlogComponent, HotelMinimalricaBenifitComponent, FooterComponent, LayoutComponent]
})
export class HotelDemoMinimalComponent {
  
  public hotelMinimal: hotelMinimal;
  public hotels: hotels[];

  constructor(private hotelService: HotelService){
    this.hotelService.hotelMinimal().subscribe(response => {
      this.hotelMinimal = response;
    });

    this.hotelService.hotelRooms().subscribe(response => {
      this.hotels = response.hotel;
    });
  }
}
