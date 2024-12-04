import { Component } from '@angular/core';
import { tourDetails } from '../../../../shared/interface/tour';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TourSinglePageModalComponent } from '../widgets/tour-single-page-modal/tour-single-page-modal.component';
import { TourGallerySliderComponent } from '../widgets/tour-gallery-slider/tour-gallery-slider.component';
import { TourPolicyComponent } from '../widgets/tour-policy/tour-policy.component';
import { TourReviewComponent } from '../widgets/tour-review/tour-review.component';
import { TourLocationComponent } from '../widgets/tour-location/tour-location.component';
import { TourAccommodationComponent } from '../widgets/tour-accommodation/tour-accommodation.component';
import { TourGalleryComponent } from '../widgets/tour-gallery/tour-gallery.component';
import { TourItineraryComponent } from '../widgets/tour-itinerary/tour-itinerary.component';
import { TourHighlightComponent } from '../widgets/tour-highlight/tour-highlight.component';
import { TourTabsComponent } from '../widgets/tour-tabs/tour-tabs.component';
import { TourSinglePageFilterComponent } from '../widgets/tour-single-page-filter/tour-single-page-filter.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-tour-page-left-sidebar',
    templateUrl: './tour-page-left-sidebar.component.html',
    styleUrl: './tour-page-left-sidebar.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, TourSinglePageFilterComponent, TourTabsComponent, TourHighlightComponent, TourItineraryComponent, TourGalleryComponent, TourAccommodationComponent, TourLocationComponent, TourReviewComponent, TourPolicyComponent, TourGallerySliderComponent, TourSinglePageModalComponent, FooterComponent, LayoutComponent]
})
export class TourPageLeftSidebarComponent {
  
  public bg_image = 'assets/images/tour/spain4.jpg';
  public title = 'splendid spain';
  public date = '11 dec, 2019';

  public tourDetail: tourDetails;

  public activeTab = 'highlight';

  constructor(private tourService: TourService) {
    this.tourService.tourDetails().subscribe(response => {
      this.tourDetail = response;
    })
  }

  getTabValue(value: string){
    this.activeTab = value;
  }
}
