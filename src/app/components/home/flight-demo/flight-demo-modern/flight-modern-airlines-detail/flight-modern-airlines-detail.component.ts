import { Component, Input } from '@angular/core';
import { airlines } from '../../../../../shared/interface/flight-modern';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-flight-modern-airlines-detail',
    templateUrl: './flight-modern-airlines-detail.component.html',
    styleUrls: ['./flight-modern-airlines-detail.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class FlightModernAirlinesDetailComponent {

  @Input() airlines: airlines[];

}
