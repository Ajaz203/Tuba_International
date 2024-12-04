import { Component, Input } from '@angular/core';
import { booking } from '../../../../../shared/interface/hotel-vector';

@Component({
    selector: 'app-cab-classic-booking',
    templateUrl: './cab-classic-booking.component.html',
    styleUrls: ['./cab-classic-booking.component.scss'],
    standalone: true
})
export class CabClassicBookingComponent {

  @Input() booking: booking[];

}
