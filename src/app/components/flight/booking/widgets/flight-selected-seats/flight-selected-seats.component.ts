import { Component } from '@angular/core';
import { flightSeats } from '../../../../../shared/components/data/data/filter/flight';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-flight-selected-seats',
    templateUrl: './flight-selected-seats.component.html',
    styleUrl: './flight-selected-seats.component.scss',
    standalone: true,
    imports: [NgClass]
})
export class FlightSelectedSeatsComponent {

  public flightSeats = flightSeats;

}
