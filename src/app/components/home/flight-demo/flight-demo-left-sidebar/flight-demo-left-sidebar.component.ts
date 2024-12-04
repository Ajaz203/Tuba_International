import { Component } from '@angular/core';
import { flightLeftSidebar } from '../../../../shared/interface/flight-left-sidebar';
import { categoryModel } from '../../../../shared/interface/tour-modern';
import { FlightService } from '../../../../shared/services/flight.service';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FlightLeftSidebarAirlineDealsComponent } from './flight-left-sidebar-airline-deals/flight-left-sidebar-airline-deals.component';
import { FlightLeftSidebarAirlineDestinationComponent } from './flight-left-sidebar-airline-destination/flight-left-sidebar-airline-destination.component';
import { FlightLeftSidebarAirlineDetailsComponent } from './flight-left-sidebar-airline-details/flight-left-sidebar-airline-details.component';
import { FlightLeftSidebarComponent } from './flight-left-sidebar/flight-left-sidebar.component';
import { FlightLeftSidebarHomeSectionComponent } from './flight-left-sidebar-home-section/flight-left-sidebar-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-flight-demo-left-sidebar',
    templateUrl: './flight-demo-left-sidebar.component.html',
    styleUrls: ['./flight-demo-left-sidebar.component.scss'],
    standalone: true,
    imports: [HeaderComponent, FlightLeftSidebarHomeSectionComponent, FlightLeftSidebarComponent, FlightLeftSidebarAirlineDetailsComponent, FlightLeftSidebarAirlineDestinationComponent, FlightLeftSidebarAirlineDealsComponent, FooterComponent, LayoutComponent]
})
export class FlightDemoLeftSidebarComponent {
  
  public selectedValue: string = 'option1';

  public flightLeftSidebar: flightLeftSidebar;
  public category: categoryModel;

  constructor(private flightService: FlightService, public tourService: TourService) {
    this.flightService.flightLeftSidebar().subscribe(response => {
      return this.flightLeftSidebar = response;
    })

    this.tourService.category().subscribe(response => {
      return this.category = response;
    })
  }


  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','143, 203, 215');
    document.documentElement.style.setProperty('--theme-color2','239, 63, 62');
  }

  changeValue(event: Event){
    this.selectedValue = (event.target as HTMLInputElement).value;
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }

}
