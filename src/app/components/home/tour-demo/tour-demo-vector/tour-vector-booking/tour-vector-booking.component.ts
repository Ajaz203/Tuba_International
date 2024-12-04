import { Component, Input } from '@angular/core';
import { booking } from '../../../../../shared/interface/hotel-vector';
import { AnimationComponent } from '../../../../../shared/components/comman/animation/animation.component';

@Component({
    selector: 'app-tour-vector-booking',
    templateUrl: './tour-vector-booking.component.html',
    styleUrls: ['./tour-vector-booking.component.scss'],
    standalone: true,
    imports: [AnimationComponent]
})
export class TourVectorBookingComponent {

  @Input() booking: booking[];

}
