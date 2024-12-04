import { Component, Input } from '@angular/core';
import { brand } from '../../../../../shared/interface/cab-modern';
import { CommanBrandComponent } from '../../widgets/comman-brand/comman-brand.component';

@Component({
    selector: 'app-cab-modern-brand',
    templateUrl: './cab-modern-brand.component.html',
    styleUrls: ['./cab-modern-brand.component.scss'],
    standalone: true,
    imports: [CommanBrandComponent]
})
export class CabModernBrandComponent {

  @Input() brand: brand[];
  @Input() title: boolean = false;
  @Input() sectionClass: boolean = true;

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
