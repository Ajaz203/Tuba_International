import { Component } from '@angular/core';
import { portfolio } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-portfolio-center-slides',
    templateUrl: './portfolio-center-slides.component.html',
    styleUrl: './portfolio-center-slides.component.scss',
    standalone: true,
    imports: [HeaderComponent, CarouselModule, FooterComponent, LayoutComponent]
})
export class PortfolioCenterSlidesComponent {
  
  public portfolio: portfolio[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    center: true,
    responsive: {
      0: {
        items: 3
      }
    }
  }

  constructor(private pageService: PagesService) {
    this.pageService.pages().subscribe(response => {
      this.portfolio = response.portfolio;
    });
  }
}
