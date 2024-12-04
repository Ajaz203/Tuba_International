import { Component, Input } from '@angular/core';
import { homeSection } from '../../../../../shared/interface/hotel-classic';
import { SearchBoxComponent } from '../../../../../shared/components/comman/search-box/search-box.component';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hotel-classic-home-section',
    templateUrl: './hotel-classic-home-section.component.html',
    styleUrls: ['./hotel-classic-home-section.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink, SearchBoxComponent]
})
export class HotelClassicHomeSectionComponent {

  @Input() homeSection:homeSection[];

  public Options = {
    loop: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>",],
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
