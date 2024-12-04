import { Component, HostListener } from '@angular/core';
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
import { HotelGalleryComponent } from '../widgets/hotel-gallery/hotel-gallery.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-hotel-page-classic',
    templateUrl: './hotel-page-classic.component.html',
    styleUrls: ['./hotel-page-classic.component.scss'],
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, HotelGalleryComponent, HotelTabSliderComponent, HotelAboutComponent, HotelRoomsComponent, HotelFacilityComponent, HotelLocationComponent, HotelReviewComponent, HotelPolicyComponent, SinglePageHotelsComponent, HotelSinglePageFilterComponent, HotelSinglePageModalComponent, FooterComponent, LayoutComponent]
})
export class HotelPageClassicComponent {

   public hotelDetails: hotelDetails;
   public activeTab = 'about';
   public tabFixed: boolean = false;

   @HostListener('window: scroll', [])
   onWindowScroll(){
    let number = window.pageYOffset || 0;
    if (number > 600) {
      this.tabFixed = true;
    } else {
      this.tabFixed = false;
    }
   }

   constructor(private hotelService: HotelService) {
    this.hotelService.hotelDetails().subscribe(response => {
      this.hotelDetails = response;
    })
  }

  getTabValue(value: string){
    this.activeTab = value;
  }
}
