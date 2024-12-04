import { Component } from '@angular/core';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { DetailsComponent } from '../../../../shared/components/comman/details/details.component';
import { FilterComponent } from '../../../../shared/components/comman/filter/filter.component';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FlightSearchComponent } from '../../widgets/flight-search/flight-search.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-flight-list-top-filter',
    templateUrl: './flight-list-top-filter.component.html',
    styleUrl: './flight-list-top-filter.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, FlightSearchComponent, LayoutComponent, FilterComponent, DetailsComponent, FooterComponent]
})
export class FlightListTopFilterComponent {
  
  public bg_image: string = 'assets/images/flights/flight-breadcrumb2.jpg';
  public title: string = 'about';
  public parent: string = 'elements';
  public child: string = 'Flight top Filter';

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
