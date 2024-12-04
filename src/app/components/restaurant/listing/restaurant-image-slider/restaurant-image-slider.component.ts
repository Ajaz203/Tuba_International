import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { DetailsComponent } from '../../../../shared/components/comman/details/details.component';
import { FilterComponent } from '../../../../shared/components/comman/filter/filter.component';
import { GridPanelComponent } from '../../../../shared/components/comman/grid-panel/grid-panel.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-restaurant-image-slider',
    templateUrl: './restaurant-image-slider.component.html',
    styleUrl: './restaurant-image-slider.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, GridPanelComponent, FilterComponent, DetailsComponent, FooterComponent, LayoutComponent]
})
export class RestaurantImageSliderComponent {
  
  public selectedTabValue: string;

  constructor() {}

  ngOnInit(){
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string){
    this.selectedTabValue = value;
  }
}
