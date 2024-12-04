import { Component, Input } from '@angular/core';
import { blogs } from '../../../../shared/interface/hotel-minimal';
import { BlogTwoComponent } from './blog-two/blog-two.component';
import { BlogOneComponent } from './blog-one/blog-one.component';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    standalone: true,
    imports: [BlogOneComponent, BlogTwoComponent]
})
export class BlogComponent {

  @Input() type: string;
  @Input() blogs: blogs[];
  @Input() border: boolean;
  @Input() colorClass: string;
  @Input() postedBy: boolean = false;
  @Input() postedDate: boolean = false;
  @Input() buttonClass: string;

}
