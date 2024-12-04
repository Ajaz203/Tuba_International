import { Component } from '@angular/core';
import { tourVector } from '../../../../shared/interface/tour-vector';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TourVectorSubscribeComponent } from './tour-vector-subscribe/tour-vector-subscribe.component';
import { TourVectorBlogComponent } from './tour-vector-blog/tour-vector-blog.component';
import { TourVectorBannerComponent } from './tour-vector-banner/tour-vector-banner.component';
import { TourVectorPopularDestinationComponent } from './tour-vector-popular-destination/tour-vector-popular-destination.component';
import { TourVectorBookingComponent } from './tour-vector-booking/tour-vector-booking.component';
import { TourVectorExploreThemesComponent } from './tour-vector-explore-themes/tour-vector-explore-themes.component';
import { TourVectorHomeSectionComponent } from './tour-vector-home-section/tour-vector-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-tour-demo-vector',
    templateUrl: './tour-demo-vector.component.html',
    styleUrls: ['./tour-demo-vector.component.scss'],
    standalone: true,
    imports: [HeaderComponent, TourVectorHomeSectionComponent, TourVectorExploreThemesComponent, TourVectorBookingComponent, TourVectorPopularDestinationComponent, TourVectorBannerComponent, TourVectorBlogComponent, TourVectorSubscribeComponent, FooterComponent, LayoutComponent]
})
export class TourDemoVectorComponent {

  public tourVector: tourVector;

  constructor(public tourService: TourService) {
    this.tourService.tourVector().subscribe(response => {
      this.tourVector = response;
    })
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','127, 180, 212');
    document.documentElement.style.setProperty('--theme-color2','0, 162, 247');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
