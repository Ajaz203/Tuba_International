import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { FlightSearchComponent } from '../../widgets/flight-search/flight-search.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-flight-list-not-found',
    templateUrl: './flight-list-not-found.component.html',
    styleUrl: './flight-list-not-found.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, FlightSearchComponent, RouterLink, FooterComponent, LayoutComponent]
})
export class FlightListNotFoundComponent {
  
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
