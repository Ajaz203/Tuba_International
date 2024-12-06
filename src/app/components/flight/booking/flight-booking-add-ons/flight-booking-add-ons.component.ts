import { Component } from '@angular/core';
import { flightAddOnsDetails } from '../../../../shared/components/data/data/filter/flight';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FlightTravelAddonsComponent } from '../widgets/flight-travel-addons/flight-travel-addons.component';
import { FlightAdditionalLuggageComponent } from '../widgets/flight-additional-luggage/flight-additional-luggage.component';
import { FlightMealsComponent } from '../widgets/flight-meals/flight-meals.component';
import { FlightSelectedSeatsComponent } from '../widgets/flight-selected-seats/flight-selected-seats.component';
import { NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';
import { FlightBookingBreadcrumbComponent } from '../widgets/flight-booking-breadcrumb/flight-booking-breadcrumb.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-flight-booking-add-ons',
    templateUrl: './flight-booking-add-ons.component.html',
    styleUrl: './flight-booking-add-ons.component.scss',
    standalone: true,
    imports: [HeaderComponent, FlightBookingBreadcrumbComponent, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody, FlightSelectedSeatsComponent, FlightMealsComponent, FlightAdditionalLuggageComponent, FlightTravelAddonsComponent, FooterComponent, LayoutComponent]
})
export class FlightBookingAddOnsComponent {
  
  public bg_image = "/assets/imges2/flight-breadcrumb2.jpg";
  public parent = "Home";
  public subParent = "flights";
  public child = "addons";

  public flightAddOnsDetails = flightAddOnsDetails;

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
