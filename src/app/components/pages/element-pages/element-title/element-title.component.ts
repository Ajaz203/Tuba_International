import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-title',
    templateUrl: './element-title.component.html',
    styleUrl: './element-title.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, FooterComponent, LayoutComponent]
})
export class ElementTitleComponent {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'title';
  public parent = 'elements';
  public child = 'title';

  constructor(){}
  
}
