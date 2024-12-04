import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { FilterComponent } from '../../../../../shared/components/comman/filter/filter.component';
import { DetailsComponent } from '../../../../../shared/components/comman/details/details.component';
import { CabSearchComponent } from '../../widgets/cab-search/cab-search.component';
import { BreadcrumbsComponent } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';

@Component({
    selector: 'app-cab-right-sidebar',
    templateUrl: './cab-right-sidebar.component.html',
    styleUrl: './cab-right-sidebar.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, CabSearchComponent, DetailsComponent, FilterComponent, FooterComponent, LayoutComponent]
})
export class CabRightSidebarComponent {
  
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
