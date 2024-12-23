import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-booking-summary',
  templateUrl: './flight-booking-summary.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class FlightBookingSummaryComponent {
  @Input() flightDetails: any;
  @Input() isLoading: boolean = false;
} 