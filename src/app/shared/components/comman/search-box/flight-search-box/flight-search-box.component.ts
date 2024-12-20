import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '../../../../services/flight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface AdultPassenger {
  name: string;
  email: string;
  phone: string;
}

interface ChildPassenger {
  name: string;
  age: number;
}

@Component({
  selector: 'app-flight-search-box',
  templateUrl: './flight-search-box.component.html',
  styleUrls: ['./flight-search-box.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule],

  styles: `
  .dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
  }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
  .modal-dialog-scrollable {
    max-height: 90vh;
  }
  .modal-dialog-scrollable .modal-content {
    max-height: 85vh;
    overflow-y: auto;
  }
`,
})
export class FlightSearchBoxComponent {
  @Input() selectedValue: string = '';
  public fromInputValue: string = '';
  public toInputValue: string = '';
  public flightLocation: any[] = [];
  public isTraveler: boolean = false;
  public fromSuggestions: any[] = [];
  public toSuggestions: any[] = [];
  public showFromSuggestions: boolean = false;
  public showToSuggestions: boolean = false;
  public isLoading : boolean = false;
  flightResults: any[] = [];



  public payload = {
    departure_id: '',
    arrival_id: '',
    outbound_date: '',
    return_date: '',
    currency: 'INR',
    type: 2, // Default is One Way (2)
    travel_class: 1,
    adults: 1,
    children: 0,
  };

  @ViewChild('successModal') successModal: any;
  @ViewChild('bookingModal') bookingModal: any;
  selectedFlight: any;

  constructor(private flightService: FlightService, public modalService: NgbModal) {}

  toggleReturnDate(): void {
    if (this.payload.type === 2) {
      this.payload.return_date = '';
    }
  }

  openTraveler(): void {
    this.isTraveler = !this.isTraveler;
  }

  onInput(field: 'from' | 'to', event: any): void {
    const query = event.target.value.trim();
    if (!query) {
      if (field === 'from') {
        this.fromSuggestions = [];
        this.showFromSuggestions = false;
      } else {
        this.toSuggestions = [];
        this.showToSuggestions = false;
      }
      return;
    }

    this.flightService.autoSuggest({ query }).subscribe({
      next: (response: any) => {
        if (response.success) {
          const suggestions = response.mainAirports;
          if (field === 'from') {
            this.fromSuggestions = suggestions;
            this.showFromSuggestions = true;
          } else {
            this.toSuggestions = suggestions;
            this.showToSuggestions = true;
          }
        }
      },
      error: (err) => console.error(`Error fetching suggestions:`, err),
    });
  }

  selectFromSuggestion(suggestion: any): void {
    this.payload.departure_id = suggestion.code;
    this.fromInputValue = suggestion.name;
    this.showFromSuggestions = false;
  }

  selectToSuggestion(suggestion: any): void {
    this.payload.arrival_id = suggestion.code;
    this.toInputValue = suggestion.name;
    this.showToSuggestions = false;
  }

  updateTraveler(type: string, delta: number): void {
    if (type === 'adults') {
      this.payload.adults = Math.max(1, this.payload.adults + delta);
    } else if (type === 'children') {
      this.payload.children = Math.max(0, this.payload.children + delta);
    }
  }

  submitForm(): void {
    if (!this.payload.departure_id || !this.payload.arrival_id || !this.payload.outbound_date) {
      console.error('Please fill in all mandatory fields.');
      return;
    }
  
    this.isLoading = true;
    this.flightService.getflight(this.payload).subscribe({
      next: (response: any) => {
        console.log('Flight Response:', response);
        this.flightResults = response.flights || [];
        this.openSuccessModal();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching flight details:', error);
        this.isLoading = false;
      },
    });
  }
  
  resetForm(): void {
    this.payload = {
      departure_id: '',
      arrival_id: '',
      outbound_date: '',
      return_date: '',
      currency: 'INR',
      type: 2, // Default is One Way (2)
      travel_class: 1,
      adults: 1,
      children: 0,
    };
    this.fromInputValue = '';
    this.toInputValue = '';
    this.fromSuggestions = [];
    this.toSuggestions = [];
    this.showFromSuggestions = false;
    this.showToSuggestions = false;
    this.isTraveler = false;
  }
  
  openSuccessModal(): void {
    const modalRef = this.modalService.open(this.successModal, {
      centered: true,
      backdrop: 'static',
      size: 'xl',
      windowClass: 'flight-search-modal wide-modal',
      scrollable: true,
      modalDialogClass: 'modal-dialog-scrollable'
    });
  }

  openBookingModal(flight: any): void {
    this.modalService.dismissAll();
    this.selectedFlight = flight;
    const modalRef = this.modalService.open(this.bookingModal, {
      centered: true,
      size: 'xl',
      windowClass: 'booking-modal',
      scrollable: true,
      backdrop: 'static',
      fullscreen: false
    });
  }

  confirmBooking(form: any): void {
    if (form.valid) {
      const bookingData: {
        flight: any;
        adults: AdultPassenger[];
        children: ChildPassenger[];
      } = {
        flight: this.selectedFlight,
        adults: [],
        children: []
      };

      // Process adult passengers
      for (let i = 0; i < this.payload.adults; i++) {
        bookingData.adults.push({
          name: form.value[`adult_name_${i}`],
          email: form.value[`adult_email_${i}`],
          phone: form.value[`adult_phone_${i}`]
        });
      }

      // Process child passengers
      for (let i = 0; i < this.payload.children; i++) {
        bookingData.children.push({
          name: form.value[`child_name_${i}`],
          age: form.value[`child_age_${i}`]
        });
      }

      console.log('Booking confirmed:', bookingData);
      this.modalService.dismissAll();
      // Here you can add API call to save booking
    }
  }

  getRange(count: number): number[] {
    return Array(count).fill(0).map((_, i) => i);
  }
}
