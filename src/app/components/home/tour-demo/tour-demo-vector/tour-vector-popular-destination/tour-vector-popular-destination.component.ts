import { Component, Input } from '@angular/core';
import { popularDestination } from '../../../../../shared/interface/hotel-vector';
import { PopularDestinationComponent } from '../../../../../shared/components/comman/popular-destination/popular-destination.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-tour-vector-popular-destination',
    templateUrl: './tour-vector-popular-destination.component.html',
    styleUrls: ['./tour-vector-popular-destination.component.scss'],
    standalone: true,
    imports: [TitleComponent, PopularDestinationComponent]
})
export class TourVectorPopularDestinationComponent {

  @Input() popularDestination: popularDestination[];

}
