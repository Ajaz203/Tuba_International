import { Component, Input } from '@angular/core';
import { BlogDetailPageDataSkeletonComponent } from './blog-detail-page-data-skeleton/blog-detail-page-data-skeleton.component';
import { BlogFilterSkeletonComponent } from '../blog-skeleton/blog-filter-skeleton/blog-filter-skeleton.component';
import { MenuSkeletonComponent } from '../skeleton-loader/menu-skeleton/menu-skeleton.component';

@Component({
    selector: 'app-blog-detail-page-skeleton',
    templateUrl: './blog-detail-page-skeleton.component.html',
    styleUrl: './blog-detail-page-skeleton.component.scss',
    standalone: true,
    imports: [MenuSkeletonComponent, BlogFilterSkeletonComponent, BlogDetailPageDataSkeletonComponent]
})
export class BlogDetailPageSkeletonComponent {

  @Input() skeletonType: string;
  @Input() filterType: string;

  public loaderHide: boolean = false;

  constructor(){
    setTimeout(() => {
        this.loaderHide = true;
    }, 5000);
  }
}
