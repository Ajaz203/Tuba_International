import { Component } from '@angular/core';
import { tourTrending } from '../../../../shared/interface/tour-trending';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TourTrendingTestimonialComponent } from './tour-trending-testimonial/tour-trending-testimonial.component';
import { TourTrendingExploreThemesComponent } from './tour-trending-explore-themes/tour-trending-explore-themes.component';
import { TourTrendingExploreContinentsComponent } from './tour-trending-explore-continents/tour-trending-explore-continents.component';
import { TourTrendingHolidaysComponent } from './tour-trending-holidays/tour-trending-holidays.component';
import { TourTrendingHomeSectionComponent } from './tour-trending-home-section/tour-trending-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-tour-demo-trending',
    templateUrl: './tour-demo-trending.component.html',
    styleUrls: ['./tour-demo-trending.component.scss'],
    standalone: true,
    imports: [HeaderComponent, TourTrendingHomeSectionComponent, TourTrendingHolidaysComponent, TourTrendingExploreContinentsComponent, TourTrendingExploreThemesComponent, TourTrendingTestimonialComponent, FooterComponent, LayoutComponent]
})
export class TourDemoTrendingComponent {
  
  public tourTrending: tourTrending;

  constructor(private tourService: TourService) {
    this.tourService.tourTrending().subscribe(response => {
      this.tourTrending = response;
    })
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','127, 180, 212');
    document.documentElement.style.setProperty('--theme-color2','239, 63, 62');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
