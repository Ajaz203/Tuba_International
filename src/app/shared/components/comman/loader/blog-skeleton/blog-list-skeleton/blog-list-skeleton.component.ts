import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-blog-list-skeleton',
    templateUrl: './blog-list-skeleton.component.html',
    styleUrl: './blog-list-skeleton.component.scss',
    standalone: true
})
export class BlogListSkeletonComponent {

  @Input() creativeList: boolean;
  @Input() mix: boolean;

}
