import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
                            <div class="airline">
                                <img [src]="flight.image_link" [alt]="flight.airline" class="airline-logo">
                            </div>
                            <div class="airline-details">
                                <span class="airline-name">{{flight?.airline || 'Airline'}}</span>
                                <span class="flight-number">{{flight?.flight_number || 'Flight No.'}}</span>
                            </div>
                        </div>
                        <div class="flight-route">
                            <div class="departure">
                                <h5>{{formatTime(flight?.departure_time) || 'N/A'}}</h5>
                                <p>{{flight?.departure_id || 'Origin'}}</p>
                                <small>{{flight?.departure_airport || ''}}</small>
                            </div>
                            <div class="flight-path">
                                <div class="duration">{{formatDuration(flight?.duration) || 'Duration'}}</div>
                                <div class="path-line">
                                    <i class="fas fa-plane"></i>
                                </div>
                                <div class="stops">{{flight?.stops || '0'}} stop(s)</div>
                            </div>
                            <div class="arrival">
                                <h5>{{formatTime(flight?.arrival_time) || 'N/A'}}</h5>
                                <p>{{flight?.arrival_id || 'Destination'}}</p>
                                <small>{{flight?.arrival_airport || ''}}</small>
                            </div>
                        </div>
                        <div class="flight-info">
                            <div class="price-details">
                                <div class="base-price">
                                    <h4>₹{{flight?.fare || 0}}</h4>
                                    <span>Base fare</span>
                                </div>
                                <div class="total-price">
                                    <h3>₹{{calculateTotalPrice(flight)}}</h3>
                                    <span>Total incl. taxes</span>
                                </div>
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
export class FlightSelectionModalComponent implements OnInit {
    @Input() flights: any[] = [];
    selectedFlight: any;

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {
        console.log('Flights data:', this.flights);
    }

    formatTime(time: string): string {
        if (!time) return 'N/A';
        return time;
    }

    formatDuration(duration: number): string {
        if (!duration) return 'N/A';
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours}h ${minutes}m`;
    }

    calculateTotalPrice(flight: any): number {
        const baseFare = flight?.fare || 0;
        const taxes = baseFare * 0.18; // 18% tax
        return Math.round(baseFare + taxes);
    }

    selectFlight(flight: any): void {
        const selectedFlight = {
            ...flight,
            total_price: this.calculateTotalPrice(flight),
            currency: 'INR',
            type: 2,
            travel_class: 1
        };
        this.activeModal.close(selectedFlight);
    }
} 