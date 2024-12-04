import { Component } from '@angular/core';
import { flightMinimal } from '../../../../shared/interface/flight-minimal';
import { category } from '../../../../shared/interface/tour-modern';
import { FlightService } from '../../../../shared/services/flight.service';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FlightMinimalBlogComponent } from './flight-minimal-blog/flight-minimal-blog.component';
import { FlightMinimalApplicationComponent } from './flight-minimal-application/flight-minimal-application.component';
import { FlightMinimalCategoryComponent } from './flight-minimal-category/flight-minimal-category.component';
import { FlightMinimalBannerComponent } from './flight-minimal-banner/flight-minimal-banner.component';
import { FlightMinimalBestDealsComponent } from './flight-minimal-best-deals/flight-minimal-best-deals.component';
import { FlightMinimalHomeSectionComponent } from './flight-minimal-home-section/flight-minimal-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-flight-demo-minimal',
    templateUrl: './flight-demo-minimal.component.html',
    styleUrls: ['./flight-demo-minimal.component.scss'],
    standalone: true,
    imports: [HeaderComponent, FlightMinimalHomeSectionComponent, FlightMinimalBestDealsComponent, FlightMinimalBannerComponent, FlightMinimalCategoryComponent, FlightMinimalApplicationComponent, FlightMinimalBlogComponent, FooterComponent, LayoutComponent]
})
export class FlightDemoMinimalComponent {
  
  public flightMinimal: flightMinimal;
  public category: category[];

  constructor(private flightService: FlightService,private tourService: TourService) {
    this.flightService.flightMinimal().subscribe(response => {
      return this.flightMinimal = response;
    })

    this.tourService.category().subscribe(response => {
      this.category = response.category;
    })
  }

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','66, 145, 184');
    document.documentElement.style.setProperty('--theme-color2','239, 63, 62');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
