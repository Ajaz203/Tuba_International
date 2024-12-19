import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlightService } from '../../../../services/flight.service';

@Component({
  selector: 'app-flight-search-box',
  templateUrl: './flight-search-box.component.html',
  styleUrls: ['./flight-search-box.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  constructor(private flightService: FlightService) {}

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

    this.flightService.getflight(this.payload).subscribe({
      next: (response) => console.log('Flight details:', response),
      error: (err) => console.error('Error fetching flight details:', err),
    });
  }
}
