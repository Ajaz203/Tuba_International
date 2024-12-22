import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-flight-selection-modal',
    template: `
        <div class="modal-content neo-modal">
            <div class="modal-header">
                <h4 class="modal-title">Select Your Flight</h4>
                <button type="button" class="btn-close" (click)="activeModal.dismiss()"></button>
            </div>
            <div class="modal-body">
                <div class="flights-grid">
                    <div *ngFor="let flight of flights" class="flight-card" (click)="selectFlight(flight)">
                        <div class="airline-info">
                            <i class="fas fa-plane"></i>
                            <span class="airline-name">{{flight.airline}}</span>
                            <span class="flight-number">{{flight.flightNumber}}</span>
                        </div>
                        <div class="flight-route">
                            <div class="departure">
                                <h5>{{flight.departureTime}}</h5>
                                <p>{{flight.origin}}</p>
                            </div>
                            <div class="flight-path">
                                <div class="duration">{{flight.duration}}</div>
                                <div class="path-line">
                                    <i class="fas fa-plane"></i>
                                </div>
                                <div class="stops">{{flight.stops}} stop(s)</div>
                            </div>
                            <div class="arrival">
                                <h5>{{flight.arrivalTime}}</h5>
                                <p>{{flight.destination}}</p>
                            </div>
                        </div>
                        <div class="flight-info">
                            <div class="price">
                                <h4>₹{{flight.price}}</h4>
                                <span>per person</span>
                            </div>
                            <button class="neo-button select-btn">
                                <span>Select</span>
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./flight-selection-modal.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class FlightSelectionModalComponent {
    @Input() flights: any[] = [];
    
    constructor(public activeModal: NgbActiveModal) {}

    selectFlight(flight: any) {
        this.activeModal.close(flight);
    }
} 