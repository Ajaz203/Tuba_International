import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../../shared/components/footer/footer.component';
import { DetailsComponent } from '../../../../../shared/components/comman/details/details.component';
import { FilterComponent } from '../../../../../shared/components/comman/filter/filter.component';
import { SearchBoxComponent } from '../../../../../shared/components/comman/search-box/search-box.component';
import { BreadcrumbsComponent } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../../shared/components/header/header.component';

@Component({
    selector: 'app-listview',
    templateUrl: './listview.component.html',
    styleUrls: ['./listview.component.scss'],
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, SearchBoxComponent, FilterComponent, DetailsComponent, FooterComponent, LayoutComponent]
})
export class ListviewComponent {
  
  public bg_image = 'assets/images/inner-pages/bg-bread.jpg';
  public title = 'hotels in dubai';
  public parent = 'Home';
  public child = 'hotels in dubai';

  constructor() {}
  
}
