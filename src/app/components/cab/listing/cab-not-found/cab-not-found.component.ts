import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CabSearchComponent } from '../widgets/cab-search/cab-search.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-cab-not-found',
    templateUrl: './cab-not-found.component.html',
    styleUrl: './cab-not-found.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, CabSearchComponent, RouterLink, FooterComponent, LayoutComponent]
})
export class CabNotFoundComponent {

  public bg_image = 'assets/images/cab/breadcrumb.jpg';
  public title = 'no result';
  public parent = 'Home';
  public child = 'no result';

  constructor() {}

  ngOnInit(){
    document.documentElement.style.setProperty('--theme-color1','233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2','233, 179, 14');
  }

  ngOnDestroy(){
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }
}
