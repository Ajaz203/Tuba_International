import { Component, Input } from '@angular/core';
import { booking } from '../../../../../shared/interface/hotel-vector';
import { AnimationComponent } from '../../../../../shared/components/comman/animation/animation.component';

@Component({
    selector: 'app-hotel-vector-booking',
    templateUrl: './hotel-vector-booking.component.html',
    styleUrls: ['./hotel-vector-booking.component.scss'],
    standalone: true,
    imports: [AnimationComponent]
})
export class HotelVectorBookingComponent {

  @Input() booking: booking[];

}
