import { Component, Input } from '@angular/core';
import { ricaBenefit } from '../../../../../shared/interface/hotel-minimal';
import { SvgIconComponent } from 'angular-svg-icon';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-cab-classic-rica-benefits',
    templateUrl: './cab-classic-rica-benefits.component.html',
    styleUrls: ['./cab-classic-rica-benefits.component.scss'],
    standalone: true,
    imports: [TitleComponent, SvgIconComponent]
})
export class CabClassicricaBenefitsComponent {

  @Input() benefits: ricaBenefit[];

  public description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aperiam at, aut commodi corporis dolorum ducimus labore magnam mollitia natus porro possimus quae sit tenetur veniam veritatis voluptate voluptatem!";

}
