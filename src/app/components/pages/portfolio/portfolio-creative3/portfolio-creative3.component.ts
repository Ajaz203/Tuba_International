import { Component } from '@angular/core';
import { Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, GallerizeDirective } from 'ng-gallery/lightbox';
import { NgxMasonryOptions, NgxMasonryModule } from 'ngx-masonry';
import { portfolio, portfolioGallery } from '../../../../shared/interface/pages';
import { PagesService } from '../../../../shared/services/pages.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { NgClass } from '@angular/common';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-portfolio-creative3',
    templateUrl: './portfolio-creative3.component.html',
    styleUrl: './portfolio-creative3.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, GallerizeDirective, NgxMasonryModule, NgClass, FooterComponent, LayoutComponent]
})
export class PortfolioCreative3Component {
  
  public bg_image = 'assets/images/tour/inner-page/breadcrumb.jpg';
  public title = 'portfolio';
  public parent = 'Home';
  public child = 'portfolio';

  public portfolio: portfolio[];
  public images: portfolioGallery[] = [];
  public activeTab = 'all';

  public masonryOptions: NgxMasonryOptions = {
		resize: true,
		initLayout: true,
  };

  constructor(private pageService: PagesService, public gallery: Gallery, public lightbox: Lightbox){
    this.pageService.pages().subscribe(response => {
      this.portfolio = response.portfolio;

      this.images = [];
      this.portfolio.forEach((data) => {
        data.creativeSectionMasonry.forEach((items) => {
          if(this.activeTab == 'all'){
            this.images.push(items);
          }else {
            if(items.type == this.activeTab){
              this.images.push(items);
            }
          }
        })
      })
    })
  }


  ngOnInit(){
    const lightboxRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }

  getTabData(value: string){
    this.activeTab = value;

    this.images = [];
    this.portfolio.forEach((data) => {
      data.creativeSectionMasonry.forEach((items) => {
        if(this.activeTab == 'all'){
          this.images.push(items);
        }else {
          if(items.type == this.activeTab){
            this.images.push(items);
          }
        }
      })
    })
  }
}
