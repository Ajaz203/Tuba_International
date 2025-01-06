import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FlightPromoCodeComponent } from '../widgets/flight-promo-code/flight-promo-code.component';
import { FlightBookingSummaryComponent } from '../widgets/flight-booking-summary/flight-booking-summary.component';
import { FlightTravelInsuranceComponent } from '../widgets/flight-travel-insurance/flight-travel-insurance.component';
import { FlightTravellerDetailsComponent } from '../widgets/flight-traveller-details/flight-traveller-details.component';
import { FlightInformationComponent } from '../widgets/flight-information/flight-information.component';
import { SelectedFlightComponent } from '../widgets/selected-flight/selected-flight.component';
import { FlightBookingBreadcrumbComponent } from '../widgets/flight-booking-breadcrumb/flight-booking-breadcrumb.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { FlightService } from '../../../../shared/services/flight.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightSelectionModalComponent } from '../widgets/flight-selection-modal/flight-selection-modal.component';
import { HttpClient ,HttpResponse } from '@angular/common/http';

interface BookingData {
    flight: any;
    passenger: {
        name: string;
        email: string;
        phone: string;
        totalPassengers: number;
    };
    journey: {
        from: string;
        to: string;
        date: string;
    };
}

@Component({
    selector: 'app-flight-booking',
    templateUrl: './flight-booking.component.html',
    styleUrls: ['./flight-booking.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HeaderComponent,
        BreadcrumbsComponent,
        FlightBookingBreadcrumbComponent,
        SelectedFlightComponent,
        FlightInformationComponent,
        FlightTravellerDetailsComponent,
        FlightTravelInsuranceComponent,
        FlightBookingSummaryComponent,
        FlightPromoCodeComponent,
        FooterComponent,
        LayoutComponent,
        AnimationComponent
    ]
})
export class FlightBookingComponent implements OnInit {
    flightForm: FormGroup;
    isSubmitting = false;
    flights: any[] = [];
    minDate: string;
    isLoadingSummary = true;
    currentBooking: any = null;
    currentStep = 1;
    errorMessage: string = '';
    isFormValid: boolean = false;
    @ViewChild('bookingSuccessModal') bookingSuccessModal: any;
    selectedFlight: any;
    bookingData: BookingData | null = null;

    public title = "Flight Booking";
    public bg_image = "/assets/imges2/flight-breadcrumb2.jpg";
    public parent = "Home";
    public subParent = "flights";
    public child = "review";

    features = [
        {
            icon: 'tag',
            title: 'Best Price Guarantee',
            description: 'Get the best deals and competitive prices on all flights'
        },
        {
            icon: 'headset',
            title: '24/7 Support',
            description: 'Round-the-clock assistance for all your travel needs'
        },
        {
            icon: 'shield-alt',
            title: 'Secure Booking',
            description: 'Safe and encrypted transactions for worry-free booking'
        },
        {
            icon: 'gift',
            title: 'Reward Points',
            description: 'Earn points on every booking for future discounts'
        }
    ];

    policies = [
        {
            icon: 'shield-alt',
            title: 'Cancellation Policy',
            items: [
                'Free cancellation within 24 hours',
                'Refund up to 75% before 72 hours',
                'Reschedule option available'
            ]
        },
        {
            icon: 'plane-departure',
            title: 'Travel Guidelines',
            items: [
                'Check-in 2 hours before departure',
                'Valid ID proof required',
                'Baggage restrictions apply'
            ]
        },
        {
            icon: 'heart',
            title: 'Safety Measures',
            items: [
                'Regular sanitization',
                'Mask mandatory',
                'Temperature screening'
            ]
        }
    ];

    public fromSuggestions: any[] = [];
    public toSuggestions: any[] = [];
    public showFromSuggestions: boolean = false;
    public showToSuggestions: boolean = false;
    public isLoading: boolean = false;
    public fromInputValue: string = '';
    public toInputValue: string = '';

    public searchPayload = {
        departure_id: '',
        arrival_id: '',
        outbound_date: '',
        return_date: '',
        currency: 'INR',
        type: 2, // One Way
        travel_class: 1,
        adults: 1,
        children: 0,
        name: '',
        email: '',
        phone: '',

    };

    // Add these properties to store error messages
    private _fromLocationErrorMsg: string = '';
    private _toLocationErrorMsg: string = '';
    private _errorMessage: string = '';

    constructor(
        private fb: FormBuilder,
        private flightService: FlightService,
        public modalService: NgbModal,
        private http: HttpClient
    ) {
        this.initForm();
        this.minDate = new Date().toISOString().split('T')[0];
    }

    ngOnInit() {
        document.documentElement.style.setProperty('--theme-color1', '66, 145, 184');
        document.documentElement.style.setProperty('--theme-color2', '66, 145, 184');
        this.fetchFlights(); 

        // Simulate loading delay
        setTimeout(() => {
            this.isLoadingSummary = false;
        }, 1500);

        // Add form value changes subscription
        this.flightForm.valueChanges.subscribe(() => {
            this.checkFormValidity();
        });

        // Sync form date with search payload
        this.flightForm.get('departureDate')?.valueChanges.subscribe(value => {
            this.searchPayload.outbound_date = value;
        });

        // Sync passengers
        this.flightForm.get('passengers')?.valueChanges.subscribe(value => {
            this.searchPayload.adults = value;
        });

        // Handle form value updates
        this.fromLocationControl?.valueChanges.subscribe(value => {
            if (value !== this.fromInputValue) {
                this.fromInputValue = value;
            }
        });

        this.toLocationControl?.valueChanges.subscribe(value => {
            if (value !== this.toInputValue) {
                this.toInputValue = value;
            }
        });
    }

    private initForm() {
        this.flightForm = this.fb.group({
            fromLocation: [this.fromInputValue, [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern(/^[a-zA-Z\s\-()]+$/)
            ]],
            toLocation: [this.toInputValue, [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern(/^[a-zA-Z\s\-()]+$/)
            ]],
            departureDate: ['', [
                Validators.required,
                this.futureDateValidator()
            ]],
            passengers: ['', [
                Validators.required,
                Validators.min(1),
                Validators.max(9)
            ]],
            name: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern(/^[a-zA-Z\s]+$/)
            ]],
            email: ['', [
                Validators.required,
                Validators.email,
                Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
            ]],
            phone: ['', [
                Validators.required,
                Validators.pattern(/^[0-9]{10}$/)
            ]],
            travel_insurance: [false],
            airport_pickup: [false]
        });
    }

    // Form Control Getters
    get fromLocationControl(): FormControl {
        return this.flightForm.get('fromLocation') as FormControl;
    }

    get toLocationControl(): FormControl {
        return this.flightForm.get('toLocation') as FormControl;
    }

    get departureDateControl() { return this.flightForm.get('departureDate'); }
    get passengersControl() { return this.flightForm.get('passengers'); }
    get nameControl() { return this.flightForm.get('name'); }
    get emailControl() { return this.flightForm.get('email'); }
    get phoneControl() { return this.flightForm.get('phone'); }

    // Error Getters
    get fromLocationError(): string {
        if (this._fromLocationErrorMsg) {
            return this._fromLocationErrorMsg;
        }

        const control = this.fromLocationControl;
        if (control?.touched && control?.errors) {
            if (control.errors['required']) return 'Departure city is required';
            if (control.errors['minlength']) return 'City name must be at least 3 characters';
            if (control.errors['pattern']) return 'Please enter a valid city name';
        }
        return '';
    }

    get toLocationError(): string {
        if (this._toLocationErrorMsg) {
            return this._toLocationErrorMsg;
        }

        const control = this.toLocationControl;
        if (control?.touched && control?.errors) {
            if (control.errors['required']) return 'Destination city is required';
            if (control.errors['minlength']) return 'City name must be at least 3 characters';
            if (control.errors['pattern']) return 'Please enter a valid city name';
        }
        return '';
    }

    get departureDateError() {
        const control = this.departureDateControl;
        if (control?.touched && control?.errors) {
            if (control.errors['required']) return 'Travel date is required';
            if (control.errors['pastDate']) return 'Please select a future date';
        }
        return null;
    }

    get passengersError() {
        const control = this.passengersControl;
        if (control?.touched) {
            if (control.hasError('required')) return 'Number of passengers is required';
            if (control.hasError('min')) return 'Minimum 1 passenger required';
            if (control.hasError('max')) return 'Maximum 9 passengers allowed';
        }
        return null;
    }

    get nameError() {
        const control = this.nameControl;
        if (control?.touched) {
            if (control.hasError('required')) return 'Name is required';
            if (control.hasError('minlength')) return 'Name must be at least 3 characters';
        }
        return null;
    }

    get emailError() {
        const control = this.emailControl;
        if (control?.touched) {
            if (control.hasError('required')) return 'Email is required';
            if (control.hasError('email')) return 'Please enter a valid email';
        }
        return null;
    }

    get phoneError() {
        const control = this.phoneControl;
        if (control?.touched) {
            if (control.hasError('required')) return 'Phone number is required';
            if (control.hasError('pattern')) return 'Please enter a valid 10-digit number';
        }
        return null;
    }

    onPhoneInput(event: Event) {
        const input = event.target as HTMLInputElement;
        input.value = input.value.replace(/\D/g, '').substring(0, 10);
        this.phoneControl?.setValue(input.value);
    }

    onSubmit() {
        if (this.flightForm.valid) {
            this.isSubmitting = true;

            // Store the form data
            this.bookingData = {
                flight: this.currentBooking,
                passenger: {
                    name: this.flightForm.get('name')?.value,
                    email: this.flightForm.get('email')?.value,
                    phone: this.flightForm.get('phone')?.value,
                    totalPassengers: this.flightForm.get('passengers')?.value
                },
                journey: {
                    from: this.flightForm.get('fromLocation')?.value,
                    to: this.flightForm.get('toLocation')?.value,
                    date: this.flightForm.get('departureDate')?.value,
                }
            };

            // Open modal with specific class
            // this.modalService.open(this.bookingSuccessModal, {
            //     centered: true,
            //     backdrop: 'static',
            //     windowClass: 'booking-success-modal'
            // });

            this.sendBookingData(this.bookingData);

        } else {
            this.showFormErrors();
        }
    }

    private sendBookingData(bookingData: any) {
        this.http.post('https://tuba-mongo-backend.onrender.com/bookFlight', bookingData, { observe: 'response' }).subscribe(
            (response: HttpResponse<any>) => { // Specify the response type
                // Check if the response status is 200
                if (response.status === 201) {
                    console.log('Booking data sent successfully:', response);
                    this.openSuccessModal(); // Open success modal
                } else {
                    this.showErrorMessage('Unexpected response from the server.'); // Handle unexpected response
                }
                this.isSubmitting = false; // Reset submitting state
            },
            error => {
                console.error('Error sending booking data:', error);
                this.isSubmitting = false; // Reset submitting state
                this.showErrorMessage('Failed to send booking data. Please try again.'); // Show error message
            }
        );
    }  



    private fetchFlights() {
        this.http.get('https://tuba-mongo-backend.onrender.com/getBookingData', { observe: 'response' }).subscribe(
            (response: HttpResponse<any>) => { // Specify the response type
                if (response.status === 200) {
                    this.flights = response.body; // Assuming the flight data is in the response body
                    console.log('Fetched flights successfully:', this.flights);
                } else {
                    this.showErrorMessage('Unexpected response from the server while fetching flights.'); // Handle unexpected response
                }
            },
            error => {
                console.error('Error fetching flights:', error);
                this.showErrorMessage('Failed to fetch flights. Please try again.'); // Show error message
            }
        );
    }
    private openSuccessModal() {
        // Open the success modal
        const modalRef = this.modalService.open(this.bookingSuccessModal, {
            centered: true,
            backdrop: 'static',
            size: 'md',
            windowClass: 'booking-success-modal'
        });
    }
    private showSuccessMessage() {
        // Add your success message logic here
        alert('Booking successful! Confirmation sent to your email.');
    }

    private showFormErrors() {
        Object.keys(this.flightForm.controls).forEach(key => {
            const control = this.flightForm.get(key);
            if (control?.invalid) {
                control.markAsTouched();
            }
        });
    }

    ngOnDestroy() {
        document.documentElement.style.removeProperty('--theme-color1');
        document.documentElement.style.removeProperty('--theme-color2');
    }

    nextStep() {
        if (this.currentStep === 1) {
            this.searchFlights();
        } else if (this.currentStep === 2) {
            if (this.validatePassengerDetails()) {
                this.currentStep++;
            }
        } else if (this.currentStep < 3) {
            this.currentStep++;
        }
    }

    private validateRouteDetails(): boolean {
        const routeControls = ['fromLocation', 'toLocation', 'departureDate', 'passengers'];
        let isValid = true;

        routeControls.forEach(controlName => {
            const control = this.flightForm.get(controlName);
            if (control?.invalid) {
                control.markAsTouched();
                isValid = false;
            }
        });

        if (!isValid) {
            this.showErrorMessage('Please fill in all required flight details correctly');
        }

        // Additional validation for same cities
        if (this.flightForm.get('fromLocation')?.value === this.flightForm.get('toLocation')?.value) {
            this.showErrorMessage('Departure and arrival cities cannot be the same');
            return false;
        }

        return isValid;
    }

    private validatePassengerDetails(): boolean {
        const passengerControls = ['name', 'email', 'phone'];
        let isValid = true;

        passengerControls.forEach(controlName => {
            const control = this.flightForm.get(controlName);
            if (control?.invalid) {
                control.markAsTouched();
                isValid = false;
            }
        });

        if (!isValid) {
            this.showErrorMessage('Please fill in all passenger details correctly');
        }

        return isValid;
    }

    private showErrorMessage(message: string) {
        this._errorMessage = message;
        setTimeout(() => {
            this._errorMessage = '';
        }, 3000);
    }

    // Custom validator for future date
    private futureDateValidator() {
        return (control: AbstractControl): ValidationErrors | null => {
            const selectedDate = new Date(control.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                return { pastDate: true };
            }
            return null;
        };
    }

    previousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
        }
    }

    // Add this method to check form validity
    checkFormValidity() {
        if (this.currentStep === 1) {
            const routeControls = ['fromLocation', 'toLocation', 'departureDate', 'passengers'];
            this.isFormValid = routeControls.every(control =>
                this.flightForm.get(control)?.valid
            );
        } else if (this.currentStep === 2) {
            const passengerControls = ['name', 'email', 'phone'];
            this.isFormValid = passengerControls.every(control =>
                this.flightForm.get(control)?.valid
            );
        }
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
        this.searchPayload.departure_id = suggestion.code;
        this.fromInputValue = suggestion.name;
        this.showFromSuggestions = false;
        this.flightForm.get('fromLocation')?.setValue(suggestion.name, { emitEvent: false });
    }

    selectToSuggestion(suggestion: any): void {
        this.searchPayload.arrival_id = suggestion.code;
        this.toInputValue = suggestion.name;
        this.showToSuggestions = false;
        this.flightForm.get('toLocation')?.setValue(suggestion.name, { emitEvent: false });
    }

    searchFlights(): void {
        if (!this.searchPayload.departure_id || !this.searchPayload.arrival_id || !this.searchPayload.outbound_date) {
            this.showErrorMessage('Please fill in all mandatory fields.');
            return;
        }

        this.isLoading = true;
        this.flightService.getflight(this.searchPayload).subscribe({
            next: (response: any) => {
                this.isLoading = false;
                if (response.flights?.length) {
                    this.showFlightSelectionModal(response.flights);
                } else {
                    this.showErrorMessage('No flights found for selected criteria.');
                }
            },
            error: (error) => {
                this.isLoading = false;
                this.showErrorMessage('Error fetching flight details. Please try again.');
                console.error('Error:', error);
            },
        });
    }

    private showFlightSelectionModal(flights: any[]): void {
        const modalRef = this.modalService.open(FlightSelectionModalComponent, {
            size: 'xl',
            centered: true,
            backdrop: 'static',
            windowClass: 'flight-selection-modal',
            modalDialogClass: 'flight-modal-dialog'
        });

        modalRef.componentInstance.flights = flights;

        modalRef.result.then((selectedFlight) => {
            if (selectedFlight) {
                this.currentBooking = selectedFlight;
                this.currentStep++; // Move to passenger details
            }
        }, (dismissReason) => {
            // Modal dismissed
        });
    }

    confirmBooking(bookingData: any): void {
        this.selectedFlight = bookingData.flight;
        // Process booking...

        // Show success modal
        const modalRef = this.modalService.open(this.bookingSuccessModal, {
            centered: true,
            backdrop: 'static',
            size: 'md',
            windowClass: 'booking-success-modal'
        });
    }

    public downloadTicket() {
        const ticketId = this.selectedFlight?.id; // Assuming you have a way to identify the ticket
        if (ticketId) {
            this.http.get(`'https://tuba-mongo-backend.onrender.com/bookFlight'/downloadTicket/${ticketId}`, { responseType: 'blob' }).subscribe(
                (response: Blob) => {
                    const blob = new Blob([response], { type: 'application/pdf' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'ticket.pdf'; // Specify the name of the downloaded file
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url); // Clean up
                },
                error => {
                    console.error('Error downloading ticket:', error);
                    this.showErrorMessage('Failed to download the ticket. Please try again.'); // Show error message
                }
            );
        } else {
            this.showErrorMessage('No ticket selected for download.'); // Handle case where no ticket is selected
        }
    }

    resetAndCloseModal(): void {
        // Reset the form
        this.flightForm.reset();

        // Reset all form-related variables
        this.currentStep = 1;
        this.fromInputValue = '';
        this.toInputValue = '';
        this.showFromSuggestions = false;
        this.showToSuggestions = false;
        this.fromSuggestions = [];
        this.toSuggestions = [];
        this._fromLocationErrorMsg = '';
        this._toLocationErrorMsg = '';
        this._errorMessage = '';
        this.isLoading = false;
        this.isSubmitting = false;

        // Set default values if needed
        this.flightForm.patchValue({
            passengers: 1,
            travel_insurance: false,
            airport_pickup: false
        });

        // Close the modal
        this.modalService.dismissAll();
    }

    closeModal(): void {
        this.resetAndCloseModal();
    }
}
