import { Component, Input } from '@angular/core';
import { deal } from '../../../../shared/interface/tour-trending';
import { DealsOneComponent } from './deals-one/deals-one.component';

@Component({
    selector: 'app-deals',
    templateUrl: './deals.component.html',
    styleUrls: ['./deals.component.scss'],
    standalone: true,
    imports: [DealsOneComponent]
})
export class DealsComponent {

  @Input() type: string;
  @Input() deals: deal[];
  @Input() text: boolean = false;

}
