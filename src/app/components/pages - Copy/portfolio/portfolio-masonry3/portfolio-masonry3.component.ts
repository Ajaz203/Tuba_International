import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { PortfolioImagesSectionComponent } from '../widgets/portfolio-images-section/portfolio-images-section.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-portfolio-masonry3',
    templateUrl: './portfolio-masonry3.component.html',
    styleUrl: './portfolio-masonry3.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, PortfolioImagesSectionComponent, FooterComponent, LayoutComponent]
})
export class PortfolioMasonry3Component {
  
  public bg_image = 'assets/home/port-bg.jpg';
  public title = 'portfolio';
  public parent = 'Home';
  public child = 'portfolio';

  constructor() {}
  
}
