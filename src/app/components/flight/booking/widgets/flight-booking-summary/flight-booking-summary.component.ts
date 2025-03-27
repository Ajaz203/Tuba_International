import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightService } from '../../../../../shared/services/flight.service';

@Component({
    selector: 'app-flight-booking-summary',
    templateUrl: './flight-booking-summary.component.html',
    styleUrls: ['./flight-booking-summary.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class FlightBookingSummaryComponent implements OnInit, OnChanges {
    @Input() flightDetails: any;
    @Input() isLoading: boolean = false;

    constructor(private flightService: FlightService) {}

    ngOnInit() {
        // No need to fetch data here as it comes from parent
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['flightDetails'] && changes['flightDetails'].currentValue) {
            console.log('Flight details updated:', this.flightDetails);
        }
    }
}
