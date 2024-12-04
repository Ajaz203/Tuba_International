import { Component } from '@angular/core';
import { imageRatio } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TitleComponent } from '../../../../shared/components/comman/title/title.component';
import { NgClass } from '@angular/common';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-image-ratio',
    templateUrl: './element-image-ratio.component.html',
    styleUrl: './element-image-ratio.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, NgClass, TitleComponent, FooterComponent, LayoutComponent]
})
export class ElementImageRatioComponent {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'image ratio';
  public parent = 'elements';
  public child = 'image ratio';

  public imageRatioDetail: imageRatio;

  constructor(private pageService: PagesService){
    this.pageService.pages().subscribe(response => {
      this.imageRatioDetail = response.elementPages.imageRatio;
    })
  }
}
