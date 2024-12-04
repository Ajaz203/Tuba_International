import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchBoxComponent } from '../../../../../shared/components/comman/search-box/search-box.component';

@Component({
    selector: 'app-flight-modern-home-section',
    templateUrl: './flight-modern-home-section.component.html',
    styleUrls: ['./flight-modern-home-section.component.scss'],
    standalone: true,
    imports: [SearchBoxComponent, RouterLink]
})
export class FlightModernHomeSectionComponent {

}
