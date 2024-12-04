import { Component } from '@angular/core';
import { elementButton } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { NgClass } from '@angular/common';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-button',
    templateUrl: './element-button.component.html',
    styleUrl: './element-button.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, NgClass, FooterComponent, LayoutComponent]
})
export class ElementButtonComponent {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'button';
  public parent = 'elements';
  public child = 'button';

  public button: elementButton[];

  constructor(private pageService: PagesService){
    this.pageService.pages().subscribe(response => {
      this.button = response.elementPages.button;
    })
  }
}
