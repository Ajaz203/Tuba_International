import { Component, Input } from '@angular/core';
import { brand } from '../../../../../shared/interface/cab-modern';
import { CommanBrandComponent } from '../../widgets/comman-brand/comman-brand.component';

@Component({
    selector: 'app-cab-classic-brand',
    templateUrl: './cab-classic-brand.component.html',
    styleUrls: ['./cab-classic-brand.component.scss'],
    standalone: true,
    imports: [CommanBrandComponent]
})
export class CabClassicBrandComponent {

  @Input() brand: brand[];

}
