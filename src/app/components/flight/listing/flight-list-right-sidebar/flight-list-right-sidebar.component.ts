import { Component } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FilterComponent } from '../../../../shared/components/comman/filter/filter.component';
import { DetailsComponent } from '../../../../shared/components/comman/details/details.component';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FlightSearchComponent } from '../../widgets/flight-search/flight-search.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-flight-list-right-sidebar',
    templateUrl: './flight-list-right-sidebar.component.html',
    styleUrl: './flight-list-right-sidebar.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, FlightSearchComponent, LayoutComponent, DetailsComponent, FilterComponent, FooterComponent]
})
export class FlightListRightSidebarComponent {
  
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
