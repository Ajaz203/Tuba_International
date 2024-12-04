import { Component } from '@angular/core';
import { hotelDetails } from '../../../../shared/interface/hotel';
import { HotelService } from '../../../../shared/services/hotel.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HotelSinglePageModalComponent } from '../widgets/hotel-single-page-modal/hotel-single-page-modal.component';
import { HotelSinglePageFilterComponent } from '../widgets/hotel-single-page-filter/hotel-single-page-filter.component';
import { SinglePageHotelsComponent } from '../widgets/single-page-hotels/single-page-hotels.component';
import { HotelPolicyComponent } from '../widgets/hotel-policy/hotel-policy.component';
import { HotelReviewComponent } from '../widgets/hotel-review/hotel-review.component';
import { HotelLocationComponent } from '../widgets/hotel-location/hotel-location.component';
import { HotelFacilityComponent } from '../widgets/hotel-facility/hotel-facility.component';
import { HotelRoomsComponent } from '../widgets/hotel-rooms/hotel-rooms.component';
import { HotelAboutComponent } from '../widgets/hotel-about/hotel-about.component';
import { HotelTabSliderComponent } from '../widgets/hotel-tab-slider/hotel-tab-slider.component';
import { HotelThumbnailImagesComponent } from '../widgets/hotel-thumbnail-images/hotel-thumbnail-images.component';
import { HotelTitleSectionComponent } from '../hotel-page-without-top/hotel-title-section/hotel-title-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';


@Component({
    selector: 'app-hotel-page-thumbnail-image',
    templateUrl: './hotel-page-thumbnail-image.component.html',
    styleUrls: ['./hotel-page-thumbnail-image.component.scss'],
    standalone: true,
    imports: [HeaderComponent, HotelTitleSectionComponent, HotelThumbnailImagesComponent, HotelTabSliderComponent, HotelAboutComponent, HotelRoomsComponent, HotelFacilityComponent, HotelLocationComponent, HotelReviewComponent, HotelPolicyComponent, SinglePageHotelsComponent, HotelSinglePageFilterComponent, HotelSinglePageModalComponent, FooterComponent, LayoutComponent]
})
export class HotelPageThumbnailImageComponent {

   public hotelDetails: hotelDetails;
   public activeTab = 'about';

   constructor(private hotelService: HotelService) {
    this.hotelService.hotelDetails().subscribe(response => {
      this.hotelDetails = response;
    })
  }

  getTabValue(value: string){
    this.activeTab = value;
  }
}
