import { Component, Input } from '@angular/core';
import { brand } from '../../../../../shared/interface/cab-modern';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-comman-brand',
    templateUrl: './comman-brand.component.html',
    styleUrls: ['./comman-brand.component.scss'],
    standalone: true,
    imports: [CarouselModule]
})
export class CommanBrandComponent {

  @Input() brand: brand[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      396:{
        items: 3
      },
      548 : {
        items : 4
      },
      1100:{
        items: 5
      }
    }
  };
}
