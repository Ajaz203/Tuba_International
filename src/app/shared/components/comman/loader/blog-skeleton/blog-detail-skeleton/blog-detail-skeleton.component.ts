import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-blog-detail-skeleton',
    templateUrl: './blog-detail-skeleton.component.html',
    styleUrl: './blog-detail-skeleton.component.scss',
    standalone: true
})
export class BlogDetailSkeletonComponent {

  @Input() gridType: string;
  @Input() mix: boolean;
}
