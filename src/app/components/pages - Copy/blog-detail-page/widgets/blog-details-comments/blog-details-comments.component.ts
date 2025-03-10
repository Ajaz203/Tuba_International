import { Component, Input } from '@angular/core';
import { blogComments } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-blog-details-comments',
    templateUrl: './blog-details-comments.component.html',
    styleUrl: './blog-details-comments.component.scss',
    standalone: true
})
export class BlogDetailsCommentsComponent {

  @Input() blogComments: blogComments[];
  
}
