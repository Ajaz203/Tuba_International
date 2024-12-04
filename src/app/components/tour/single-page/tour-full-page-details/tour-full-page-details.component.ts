import { Component, HostListener } from '@angular/core';
import { tourDetails } from '../../../../shared/interface/tour';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TourSinglePageModalComponent } from '../widgets/tour-single-page-modal/tour-single-page-modal.component';
import { TourSinglePageFilterComponent } from '../widgets/tour-single-page-filter/tour-single-page-filter.component';
import { TourGallerySliderComponent } from '../widgets/tour-gallery-slider/tour-gallery-slider.component';
import { TourPolicyComponent } from '../widgets/tour-policy/tour-policy.component';
import { TourReviewComponent } from '../widgets/tour-review/tour-review.component';
import { TourLocationComponent } from '../widgets/tour-location/tour-location.component';
import { TourAccommodationComponent } from '../widgets/tour-accommodation/tour-accommodation.component';
import { TourGalleryComponent } from '../widgets/tour-gallery/tour-gallery.component';
import { TourItineraryComponent } from '../widgets/tour-itinerary/tour-itinerary.component';
import { TourHighlightComponent } from '../widgets/tour-highlight/tour-highlight.component';
import { TourTabsComponent } from '../widgets/tour-tabs/tour-tabs.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-tour-full-page-details',
    templateUrl: './tour-full-page-details.component.html',
    styleUrl: './tour-full-page-details.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, TourTabsComponent, TourHighlightComponent, TourItineraryComponent, TourGalleryComponent, TourAccommodationComponent, TourLocationComponent, TourReviewComponent, TourPolicyComponent, TourGallerySliderComponent, TourSinglePageFilterComponent, TourSinglePageModalComponent, FooterComponent, LayoutComponent]
})
export class TourFullPageDetailsComponent {
  
  public bg_image = 'assets/images/tour/spain4.jpg';
  public title = 'splendid spain';
  public date = '11 dec, 2019';

  public tourDetail: tourDetails;

  public activeTab = 'highlight';
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

  constructor(private tourService: TourService) {
    this.tourService.tourDetails().subscribe(response => {
      this.tourDetail = response;
    })
  }

  getTabValue(value: string){
    this.activeTab = value;
  }
}
