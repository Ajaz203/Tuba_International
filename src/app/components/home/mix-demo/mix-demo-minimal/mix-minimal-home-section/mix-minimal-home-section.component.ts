import { Component, Input } from '@angular/core';
import { SearchBoxComponent } from '../../../../../shared/components/comman/search-box/search-box.component';

@Component({
    selector: 'app-mix-minimal-home-section',
    templateUrl: './mix-minimal-home-section.component.html',
    styleUrls: ['./mix-minimal-home-section.component.scss'],
    standalone: true,
    imports: [SearchBoxComponent]
})
export class MixMinimalHomeSectionComponent {

  @Input() searchBoxType: string;

}
