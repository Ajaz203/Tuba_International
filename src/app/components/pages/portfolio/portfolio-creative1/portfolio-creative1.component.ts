import { Component } from '@angular/core';
import { portfolio } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-portfolio-creative1',
    templateUrl: './portfolio-creative1.component.html',
    styleUrl: './portfolio-creative1.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, FooterComponent, LayoutComponent]
})
export class PortfolioCreative1Component {
  
  public bg_image = 'assets/home/port-bg.jpg';
  public title = 'portfolio';
  public parent = 'Home';
  public child = 'portfolio';

  public portfolio: portfolio[];

  constructor(private pageService: PagesService) {
    this.pageService.pages().subscribe(response => {
      this.portfolio = response.portfolio;
    });
  }
}
