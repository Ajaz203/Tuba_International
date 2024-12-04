import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { FilterComponent } from '../../../../../shared/components/comman/filter/filter.component';
import { DetailsComponent } from '../../../../../shared/components/comman/details/details.component';
import { GridPanelComponent } from '../../../../../shared/components/comman/grid-panel/grid-panel.component';
import { SearchBoxComponent } from '../../../../../shared/components/comman/search-box/search-box.component';
import { BreadcrumbsComponent } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';

@Component({
    selector: 'app-hotel-leaflet-onclick',
    templateUrl: './hotel-leaflet-onclick.component.html',
    styleUrls: ['./hotel-leaflet-onclick.component.scss'],
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, SearchBoxComponent, GridPanelComponent, DetailsComponent, FilterComponent, FooterComponent, LayoutComponent]
})
export class HotelLeafletOnclickComponent {
  
  public bg_image = 'assets/images/inner-pages/bg-bread.jpg';
  public title = 'hotels in dubai';
  public parent = 'Home';
  public child = 'hotels in dubai';

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
