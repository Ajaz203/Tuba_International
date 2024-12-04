import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../../../shared/components/comman/search-box/search-box.component';

@Component({
    selector: 'app-hotel-vector-home-section',
    templateUrl: './hotel-vector-home-section.component.html',
    styleUrls: ['./hotel-vector-home-section.component.scss'],
    standalone: true,
    imports: [SearchBoxComponent]
})
export class HotelVectorHomeSectionComponent {

}
