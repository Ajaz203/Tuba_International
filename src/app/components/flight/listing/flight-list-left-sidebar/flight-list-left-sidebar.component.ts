import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { DetailsComponent } from '../../../../shared/components/comman/details/details.component';
import { FilterComponent } from '../../../../shared/components/comman/filter/filter.component';
import { FlightSearchComponent } from '../../widgets/flight-search/flight-search.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-flight-list-left-sidebar',
    templateUrl: './flight-list-left-sidebar.component.html',
    styleUrl: './flight-list-left-sidebar.component.scss',
    standalone: true,
    imports: [HeaderComponent, FlightSearchComponent, FilterComponent, DetailsComponent, FooterComponent, LayoutComponent]
})
export class FlightListLeftSidebarComponent {
  
  constructor() {}
  
}
