import { Component, Input } from '@angular/core';
import { BlogDetailSkeletonComponent } from './blog-detail-skeleton/blog-detail-skeleton.component';
import { BlogListSkeletonComponent } from './blog-list-skeleton/blog-list-skeleton.component';
import { BlogFilterSkeletonComponent } from './blog-filter-skeleton/blog-filter-skeleton.component';
import { MenuSkeletonComponent } from '../skeleton-loader/menu-skeleton/menu-skeleton.component';

@Component({
    selector: 'app-blog-skeleton',
    templateUrl: './blog-skeleton.component.html',
    styleUrl: './blog-skeleton.component.scss',
    standalone: true,
    imports: [MenuSkeletonComponent, BlogFilterSkeletonComponent, BlogListSkeletonComponent, BlogDetailSkeletonComponent]
})
export class BlogSkeletonComponent {

  @Input() skeletonType: string;
  @Input() filterType: string;
  @Input() gridType: string;
  @Input() creativeList: boolean;
  @Input() list: boolean;
  @Input() mix: boolean;

  public loaderHide: boolean = false;

  constructor(){
    setTimeout(() => {
        this.loaderHide = true;
    }, 5000);
  }
}
