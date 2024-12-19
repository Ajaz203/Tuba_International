import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { PortfolioImagesSectionComponent } from '../widgets/portfolio-images-section/portfolio-images-section.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-portfolio-grid4-title',
    templateUrl: './portfolio-grid4-title.component.html',
    styleUrl: './portfolio-grid4-title.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, PortfolioImagesSectionComponent, FooterComponent, LayoutComponent]
})
export class PortfolioGrid4TitleComponent {
  
  public bg_image = 'assets/home/port-bg.jpg';
  public title = 'portfolio';
  public parent = 'Home';
  public child = 'portfolio';

  constructor() {}
  
}
