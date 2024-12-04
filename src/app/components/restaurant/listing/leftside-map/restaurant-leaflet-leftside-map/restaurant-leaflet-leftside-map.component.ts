import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { DetailsComponent } from '../../../../../shared/components/comman/details/details.component';
import { GridPanelComponent } from '../../../../../shared/components/comman/grid-panel/grid-panel.component';
import { BreadcrumbsComponent } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';

@Component({
    selector: 'app-restaurant-leaflet-leftside-map',
    templateUrl: './restaurant-leaflet-leftside-map.component.html',
    styleUrl: './restaurant-leaflet-leftside-map.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, GridPanelComponent, DetailsComponent, FooterComponent, LayoutComponent]
})
export class RestaurantLeafletLeftsideMapComponent {
  
  public selectedTabValue: string;

  constructor() {}

  ngOnInit(){
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string){
    this.selectedTabValue = value;
  }
}
