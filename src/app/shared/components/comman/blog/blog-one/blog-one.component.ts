import { Component, Input } from '@angular/core';
import { blogs } from '../../../../../shared/interface/hotel-minimal';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-blog-one',
    templateUrl: './blog-one.component.html',
    styleUrls: ['./blog-one.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink, NgClass]
})
export class BlogOneComponent {

  @Input() blogs: blogs[];
  @Input() border: boolean;
  @Input() colorClass: string;

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1
      },
      668: {
        items: 2
      },
      999: {
        items: 3
      }
    }
  };
}
