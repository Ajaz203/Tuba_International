import { Component, Input } from '@angular/core';
import { popularDestination } from '../../../../../shared/interface/hotel-vector';
import { PopularDestinationComponent } from '../../../../../shared/components/comman/popular-destination/popular-destination.component';

@Component({
    selector: 'app-hotel-vector-popular-destination',
    templateUrl: './hotel-vector-popular-destination.component.html',
    styleUrls: ['./hotel-vector-popular-destination.component.scss'],
    standalone: true,
    imports: [PopularDestinationComponent]
})
export class HotelVectorPopularDestinationComponent {

  @Input() popularDestination: popularDestination[];

}
