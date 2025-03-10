import { Component, HostListener } from '@angular/core';
import { faq } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FaqDetailsComponent } from './faq-details/faq-details.component';
import { FaqTabComponent } from './faq-tab/faq-tab.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, FaqTabComponent, FaqDetailsComponent, FooterComponent, LayoutComponent]
})
export class FaqComponent {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'FAQ';
  public parent = 'Home';
  public child = 'FAQ';

  public faq: faq;

  public activeTab: string = 'general';

  public isStuck: boolean = false;
  public isNotStuck: boolean = false;

  @HostListener('window: scroll', [])
   onWindowScroll(){
    let number = window.pageYOffset || 0;

    if (number > 595) {
      this.isStuck = true;
      this.isNotStuck = false;
    }else {
      this.isStuck = false
    }
    if(number > 805){
      this.isNotStuck = true;
      this.isStuck = false;
    }
   }

  constructor(private pageService: PagesService){
    this.pageService.pages().subscribe(response => {
      this.faq = response.otherPages.faq;
    })
  }

  getTabValue(value: string){
    this.activeTab = value;
  }
}
