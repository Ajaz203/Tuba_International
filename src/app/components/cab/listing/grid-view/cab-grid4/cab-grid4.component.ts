import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { DetailsComponent } from '../../../../../shared/components/comman/details/details.component';
import { GridPanelComponent } from '../../../../../shared/components/comman/grid-panel/grid-panel.component';
import { CabSearchComponent } from '../../widgets/cab-search/cab-search.component';
import { BreadcrumbsComponent } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';

@Component({
    selector: 'app-cab-grid4',
    templateUrl: './cab-grid4.component.html',
    styleUrl: './cab-grid4.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, CabSearchComponent, GridPanelComponent, DetailsComponent, FooterComponent, LayoutComponent]
})
export class CabGrid4Component {

  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'cab search';
  public parent = 'Home';
  public child = 'cab search';

  public selectedTabValue: string;

  constructor() {}

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','233, 179, 14');

    this.selectedTabValue = 'all';
  }


  getTabValue(value: string){
    this.selectedTabValue = value;
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
