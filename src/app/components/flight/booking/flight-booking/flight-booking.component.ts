import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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
@Component({
    selector: 'app-flight-booking',
    templateUrl: './flight-booking.component.html',
    styleUrls: ['./flight-booking.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
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
    minDate: string;
    isLoadingSummary = true;
    currentBooking: any = null;
    currentStep = 1;
    errorMessage: string = '';
    isFormValid: boolean = false;

    public title = "Flight Booking";
    public bg_image = "/assets/imges2/flight-breadcrumb2.jpg";
    public parent = "Home";
    public subParent = "flights";
    public child = "review";

    constructor(private fb: FormBuilder) {
        this.initForm();
        this.minDate = new Date().toISOString().split('T')[0];
    }

    ngOnInit() {
        document.documentElement.style.setProperty('--theme-color1','66, 145, 184');
        document.documentElement.style.setProperty('--theme-color2','66, 145, 184');
        
        // Simulate loading delay
        setTimeout(() => {
            this.isLoadingSummary = false;
        }, 1500);

        // Add form value changes subscription
        this.flightForm.valueChanges.subscribe(() => {
            this.checkFormValidity();
        });
    }

    private initForm() {
        this.flightForm = this.fb.group({
            fromLocation: ['', [
                Validators.required,
                Validators.minLength(3),
                Validators.pattern(/^[a-zA-Z\s\-()]+$/)
            ]],
            toLocation: ['', [
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
    get fromLocationControl() { return this.flightForm.get('fromLocation'); }
    get toLocationControl() { return this.flightForm.get('toLocation'); }
    get departureDateControl() { return this.flightForm.get('departureDate'); }
    get passengersControl() { return this.flightForm.get('passengers'); }
    get nameControl() { return this.flightForm.get('name'); }
    get emailControl() { return this.flightForm.get('email'); }
    get phoneControl() { return this.flightForm.get('phone'); }

    // Error Getters
    get fromLocationError() {
        const control = this.fromLocationControl;
        if (control?.touched && control?.errors) {
            if (control.errors['required']) return 'Departure city is required';
            if (control.errors['minlength']) return 'City name must be at least 3 characters';
            if (control.errors['pattern']) return 'Please enter a valid city name';
        }
        return null;
    }

    get toLocationError() {
        const control = this.toLocationControl;
        if (control?.touched && control?.errors) {
            if (control.errors['required']) return 'Destination city is required';
            if (control.errors['minlength']) return 'City name must be at least 3 characters';
            if (control.errors['pattern']) return 'Please enter a valid city name';
        }
        return null;
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
            this.currentBooking = {
                from: this.flightForm.value.fromLocation,
                to: this.flightForm.value.toLocation,
                departureTime: '10:00 AM',
                arrivalTime: '12:00 PM',
                // Add other details
            };
            
            // Simulate API call
            setTimeout(() => {
                this.showSuccessMessage();
                this.flightForm.reset();
                this.isSubmitting = false;
                this.currentBooking = null;
                this.currentStep = 1;
            }, 1500);
        } else {
            this.showFormErrors();
        }
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
            if (this.validateRouteDetails()) {
                this.currentStep++;
            }
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
        // Add this to your HTML template
        this.errorMessage = message;
        setTimeout(() => {
            this.errorMessage = '';
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
}
