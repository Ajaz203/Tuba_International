import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AnimationComponent } from '../../animation/animation.component';

@Component({
    selector: 'app-tour-breadcrumb-single-page',
    templateUrl: './tour-breadcrumb-single-page.component.html',
    styleUrl: './tour-breadcrumb-single-page.component.scss',
    standalone: true,
    imports: [AnimationComponent, CarouselModule]
})
export class TourBreadcrumbSinglePageComponent {

  @Input() bg_image: string;
  @Input() title: string;
  @Input() days: number;
  @Input() date: string;
  @Input() slider: boolean;
  @Input() birdAnimation: boolean;
  @Input() tourVideo: boolean;

  public carouselData = [
    {
      title: "splendid spain",
      days: 7,
      date: "11 dec, 2019",
      image: "assets/images/tour/spain4.jpg",
      details: true
    },
    {
      title: "splendid spain",
      image: "assets/images/tour/spain3.jpg",
      subTitle: true
    }
  ]

  public options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
    items: 1,

      }
    }
  }
}
