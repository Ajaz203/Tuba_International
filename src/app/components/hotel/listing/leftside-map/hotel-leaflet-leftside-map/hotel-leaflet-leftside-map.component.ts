import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { DetailsComponent } from '../../../../../shared/components/comman/details/details.component';
import { GridPanelComponent } from '../../../../../shared/components/comman/grid-panel/grid-panel.component';
import { SearchBoxComponent } from '../../../../../shared/components/comman/search-box/search-box.component';
import { BreadcrumbsComponent } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';

@Component({
    selector: 'app-hotel-leaflet-leftside-map',
    templateUrl: './hotel-leaflet-leftside-map.component.html',
    styleUrls: ['./hotel-leaflet-leftside-map.component.scss'],
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, SearchBoxComponent, GridPanelComponent, DetailsComponent, FooterComponent, LayoutComponent]
})
export class HotelLeafletLeftsideMapComponent {
  
  public bg_image = 'assets/images/inner-pages/bg-bread.jpg';
  public title = 'hotels in dubai';
  public parent = 'Home';
  public child = 'hotels in dubai';

  public selectedTabValue: string;

  public mapOptions: google.maps.MapOptions = {
    center: { lat: 20.5937, lng: 78.9629 },
    zoom: 5
  };

  constructor() {}

  ngOnInit(){
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string){
    this.selectedTabValue = value;
  }
}
