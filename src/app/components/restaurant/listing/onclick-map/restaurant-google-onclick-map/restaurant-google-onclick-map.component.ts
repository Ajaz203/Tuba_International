import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { FilterComponent } from '../../../../../shared/components/comman/filter/filter.component';
import { DetailsComponent } from '../../../../../shared/components/comman/details/details.component';
import { GridPanelComponent } from '../../../../../shared/components/comman/grid-panel/grid-panel.component';
import { BreadcrumbsComponent } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';

@Component({
    selector: 'app-restaurant-google-onclick-map',
    templateUrl: './restaurant-google-onclick-map.component.html',
    styleUrl: './restaurant-google-onclick-map.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, GridPanelComponent, DetailsComponent, FilterComponent, FooterComponent, LayoutComponent]
})
export class RestaurantGoogleOnclickMapComponent {
  
  public selectedTabValue: string;
  public isOpenMap: boolean;

  constructor() {}

  ngOnInit(){
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string){
    this.selectedTabValue = value;
  }

  openMap(value: boolean){
    this.isOpenMap = value;
  }
}
