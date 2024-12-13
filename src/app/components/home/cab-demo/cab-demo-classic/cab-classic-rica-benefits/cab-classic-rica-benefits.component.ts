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

  public description = "At Tuba International Cabs, we are committed to delivering a seamless travel experience tailored to your needs. With a fleet of modern vehicles, professional drivers, and 24/7 availability, we ensure safety, comfort, and reliability every step of the way. Whether for business or leisure, choose Tuba for journeys that matter.";

}
