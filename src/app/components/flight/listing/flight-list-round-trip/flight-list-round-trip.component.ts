import { Component } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FlightRoundTripBookingDetailsComponent } from './flight-round-trip-booking-details/flight-round-trip-booking-details.component';
import { DetailsComponent } from '../../../../shared/components/comman/details/details.component';
import { FilterComponent } from '../../../../shared/components/comman/filter/filter.component';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FlightSearchComponent } from '../../widgets/flight-search/flight-search.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-flight-list-round-trip',
    templateUrl: './flight-list-round-trip.component.html',
    styleUrl: './flight-list-round-trip.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, FlightSearchComponent, LayoutComponent, FilterComponent, DetailsComponent, FlightRoundTripBookingDetailsComponent, FooterComponent]
})
export class FlightListRoundTripComponent {
  
  public bg_image: string = 'assets/images/flights/flight-breadcrumb2.jpg';

  constructor() {}

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','66, 145, 184');
    document.documentElement.style.setProperty('--theme-color2','66, 145, 184');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
