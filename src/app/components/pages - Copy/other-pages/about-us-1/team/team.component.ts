import { Component, Input } from '@angular/core';
import { team } from '../../../../../shared/interface/pages';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrl: './team.component.scss',
    standalone: true,
    imports: [CarouselModule]
})
export class TeamComponent {

  @Input() team: team[];
  @Input() classic: boolean = false;

  public options = {
    loop: true,
    nav: false,
    dots: true,
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
  }
}
