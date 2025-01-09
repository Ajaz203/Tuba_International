import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from '../../../../../shared/services/flight.service';

@Component({
    selector: 'app-flight-booking-summary',
    templateUrl: './flight-booking-summary.component.html',
    styleUrls: ['./flight-booking-summary.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class FlightBookingSummaryComponent {
    @Input() flightDetails: any; // Define the input property
    @Input() isLoading: boolean = false; // If you have this input as well

 
}
