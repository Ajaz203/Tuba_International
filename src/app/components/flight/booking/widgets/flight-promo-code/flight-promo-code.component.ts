import { Component } from '@angular/core';
import { flightPromoCode } from '../../../../../shared/components/data/data/filter/flight';

@Component({
    selector: 'app-flight-promo-code',
    templateUrl: './flight-promo-code.component.html',
    styleUrl: './flight-promo-code.component.scss',
    standalone: true
})
export class FlightPromoCodeComponent {

  public flightPromoCode = flightPromoCode;

}
