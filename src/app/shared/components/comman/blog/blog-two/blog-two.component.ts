import { Component, Input } from '@angular/core';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-blog-two',
    templateUrl: './blog-two.component.html',
    styleUrls: ['./blog-two.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink, NgClass]
})
export class BlogTwoComponent {

  @Input() blogs: blogs[];
  @Input() postedBy: boolean = false;
  @Input() postedDate: boolean = false;
  @Input() buttonClass: string;

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 25,
    responsive: {
      0: {
        items: 1,
      },
      890: {
        items: 2
      }
    },
  };
}
