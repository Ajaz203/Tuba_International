import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { DetailsComponent } from '../../../../shared/components/comman/details/details.component';
import { GridPanelComponent } from '../../../../shared/components/comman/grid-panel/grid-panel.component';
import { SearchBoxComponent } from '../../../../shared/components/comman/search-box/search-box.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-hotel-slider',
    templateUrl: './hotel-slider.component.html',
    styleUrls: ['./hotel-slider.component.scss'],
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, SearchBoxComponent, GridPanelComponent, DetailsComponent, FooterComponent, LayoutComponent]
})
export class HotelSliderComponent {
  
  public bg_image = 'assets/images/inner-pages/bg-bread.jpg';
  public title = 'hotels in dubai';
  public parent = 'Home';
  public child = 'hotels in dubai';

  public selectedTabValue: string;

  constructor() {}

  ngOnInit(){
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string){
    this.selectedTabValue = value;
  }
}
