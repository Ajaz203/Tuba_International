import { Component, Input } from '@angular/core';
import { Gallery, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, GallerizeDirective } from 'ng-gallery/lightbox';
import { NgxMasonryOptions, NgxMasonryModule } from 'ngx-masonry';
import { portfolio, portfolioGallery } from '../../../../../shared/interface/pages';
import { PagesService } from '../../../../../shared/services/pages.service';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-portfolio-images-section',
    templateUrl: './portfolio-images-section.component.html',
    styleUrl: './portfolio-images-section.component.scss',
    standalone: true,
    imports: [GallerizeDirective, NgxMasonryModule, NgStyle]
})
export class PortfolioImagesSectionComponent {

  @Input() gridType: string;
  @Input() details: boolean = false;
  @Input() masonry: boolean = false;

  public portfolio: portfolio[];
  public images: portfolioGallery[] = [];
  public activeTab = 'all';

  public masonryOptions: NgxMasonryOptions = {
    gutter: 30,
  };

  constructor(private pageService: PagesService, public gallery: Gallery, public lightbox: Lightbox){
    this.pageService.pages().subscribe(response => {
      this.portfolio = response.portfolio;

      this.images = [];
      this.portfolio.forEach((data) => {
        if(this.masonry == true){
          data.masonryGallery.forEach((items) => {
          if(this.activeTab == 'all'){
            this.images.push(items);
          }else {
            if(items.type == this.activeTab){
              this.images.push(items);
            }
          }
        })
        }else {
          data.gallery.forEach((items) => {
            if(this.activeTab == 'all'){
              this.images.push(items);
            }else {
              if(items.type == this.activeTab){
                this.images.push(items);
              }
            }
          })
        }
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
      if(this.masonry == true){
          data.masonryGallery.forEach((items) => {
          if(this.activeTab == 'all'){
            this.images.push(items);
          }else {
            if(items.type == this.activeTab){
              this.images.push(items);
            }
          }
        })
        }else {
          data.gallery.forEach((items) => {
            if(this.activeTab == 'all'){
              this.images.push(items);
            }else {
              if(items.type == this.activeTab){
                this.images.push(items);
              }
            }
          })
        }
    })
  }
}
