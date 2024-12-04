import { Component } from '@angular/core';
import { category, tourModern } from '../../../../shared/interface/tour-modern';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TourModernSubscribeComponent } from './tour-modern-subscribe/tour-modern-subscribe.component';
import { TourModernAppComponent } from './tour-modern-app/tour-modern-app.component';
import { TourModernServiceComponent } from './tour-modern-service/tour-modern-service.component';
import { TourModernGalleryComponent } from './tour-modern-gallery/tour-modern-gallery.component';
import { TourModernTestimonialComponent } from './tour-modern-testimonial/tour-modern-testimonial.component';
import { TourModernBannerComponent } from './tour-modern-banner/tour-modern-banner.component';
import { TourModernAwesomePackageComponent } from './tour-modern-awesome-package/tour-modern-awesome-package.component';
import { TourModernVideoComponent } from './tour-modern-video/tour-modern-video.component';
import { TourModernCategoryComponent } from './tour-modern-category/tour-modern-category.component';
import { SearchBoxComponent } from '../../../../shared/components/comman/search-box/search-box.component';
import { TourModernHomeSectionComponent } from './tour-modern-home-section/tour-modern-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-tour-demo-modern',
    templateUrl: './tour-demo-modern.component.html',
    styleUrls: ['./tour-demo-modern.component.scss'],
    standalone: true,
    imports: [HeaderComponent, TourModernHomeSectionComponent, SearchBoxComponent, TourModernCategoryComponent, TourModernVideoComponent, TourModernAwesomePackageComponent, TourModernBannerComponent, TourModernTestimonialComponent, TourModernGalleryComponent, TourModernServiceComponent, TourModernAppComponent, TourModernSubscribeComponent, FooterComponent, LayoutComponent]
})
export class TourDemoModernComponent {
  
  public tourModern: tourModern;
  public category: category[];

  constructor(private tourService: TourService) {
    this.tourService.tourModern().subscribe(response => {
      this.tourModern = response;
    })

    this.tourService.category().subscribe(response => {
      this.category = response.category;
    })
  }
}
