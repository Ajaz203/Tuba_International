import { Component, Input } from '@angular/core';
import { tourPolicy } from '../../../../../shared/interface/tour';

@Component({
    selector: 'app-tour-policy',
    templateUrl: './tour-policy.component.html',
    styleUrl: './tour-policy.component.scss',
    standalone: true
})
export class TourPolicyComponent {

  @Input() policy: tourPolicy[];

}

