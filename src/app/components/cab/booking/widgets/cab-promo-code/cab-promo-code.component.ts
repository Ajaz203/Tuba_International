import { Component } from '@angular/core';
import { cabPromoCode } from '../../../../../shared/components/data/data/filter/cab';

@Component({
    selector: 'app-cab-promo-code',
    templateUrl: './cab-promo-code.component.html',
    styleUrl: './cab-promo-code.component.scss',
    standalone: true
})
export class CabPromoCodeComponent {

  public cabPromoCode = cabPromoCode;

}
