import { Component } from '@angular/core';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { DetailsComponent } from '../../../../shared/components/comman/details/details.component';
import { SearchBoxComponent } from '../../../../shared/components/comman/search-box/search-box.component';
import { GridPanelComponent } from '../../../../shared/components/comman/grid-panel/grid-panel.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-tour-with-slider',
    templateUrl: './tour-with-slider.component.html',
    styleUrls: ['./tour-with-slider.component.scss'],
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, GridPanelComponent, SearchBoxComponent, DetailsComponent, FooterComponent, LayoutComponent]
})
export class TourWithSliderComponent {
  
  public bg_image = 'assets/images/inner-pages/breadcrumb1.jpg';
  public title = 'holiday package';
  public parent = 'Home';
  public child = 'holiday package';

  public selectedTabValue: string;

  constructor(public tourService: TourService) {
    this.tourService.isOpenFindTours = false;
  }

  ngOnInit(){
    this.selectedTabValue = 'all';
  }

  getTabValue(value: string){
    this.selectedTabValue = value;
  }
}
