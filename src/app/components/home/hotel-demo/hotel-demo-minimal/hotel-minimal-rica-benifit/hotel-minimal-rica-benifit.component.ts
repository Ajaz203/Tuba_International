import { Component, Input } from '@angular/core';
import { ricaBenefit } from '../../../../../shared/interface/hotel-minimal';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
    selector: 'app-hotel-minimal-rica-benifit',
    templateUrl: './hotel-minimal-rica-benifit.component.html',
    styleUrls: ['./hotel-minimal-rica-benifit.component.scss'],
    standalone: true,
    imports: [SvgIconComponent]
})
export class HotelMinimalricaBenifitComponent {

  @Input() benefits: ricaBenefit[];
  @Input() sticky:boolean;

  public description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aperiam at, aut commodi corporis dolorum ducimus labore magnam mollitia natus porro possimus quae sit tenetur veniam veritatis voluptate voluptatem!";

}
