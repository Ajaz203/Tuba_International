import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { FilterComponent } from '../../../../../shared/components/comman/filter/filter.component';
import { DetailsComponent } from '../../../../../shared/components/comman/details/details.component';
import { GridPanelComponent } from '../../../../../shared/components/comman/grid-panel/grid-panel.component';
import { BreadcrumbsComponent } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';

@Component({
    selector: 'app-restaurant-right-sidebar',
    templateUrl: './restaurant-right-sidebar.component.html',
    styleUrl: './restaurant-right-sidebar.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, GridPanelComponent, DetailsComponent, FilterComponent, FooterComponent, LayoutComponent]
})
export class RestaurantRightSidebarComponent {
  
  public selectedTabValue: string;

  constructor() {}

  ngOnInit(){
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string){
    this.selectedTabValue = value;
  }
}
