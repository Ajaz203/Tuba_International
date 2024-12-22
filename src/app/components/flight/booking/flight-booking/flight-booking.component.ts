import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
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
@Component({
    selector: 'app-flight-booking',
    templateUrl: './flight-booking.component.html',
    styleUrls: ['./flight-booking.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HeaderComponent,
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
    showConfirmationModal = false;
    currentBooking: any;

    public bg_image = "/assets/imges2/flight-breadcrumb2.jpg";
    public parent = "Home";
    public subParent = "flights";
    public child = "review";

    constructor(private fb: FormBuilder) {
        this.initForm();
    }

    ngOnInit() {
        document.documentElement.style.setProperty('--theme-color1','66, 145, 184');
        document.documentElement.style.setProperty('--theme-color2','66, 145, 184');
    }

    private initForm() {
        this.flightForm = this.fb.group({
            // Required fields
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
            passport_number: ['', [
                Validators.required,
                Validators.pattern(/^[A-Z0-9]{9}$/)
            ]],
            passport_expiry: ['', [Validators.required, this.validateFutureDate.bind(this)]],
            
            // Optional fields
            special_requests: [''],
            meal_preference: [''],
            seat_preference: [''],
            terms_accepted: [false, Validators.requiredTrue]
        });

        // Debug form validation
        this.flightForm.statusChanges.subscribe(status => {
            console.log('Form Status:', status);
            console.log('Form Valid:', this.flightForm.valid);
        });
    }

    onSubmit() {
        if (this.flightForm.valid) {
            this.isSubmitting = true;

            const bookingData = {
                ...this.flightForm.value,
                booking_type: 'flight',
                status: 'pending',
                created_at: new Date().toISOString()
            };

            console.log('Booking Data:', bookingData);
            // Add your API call here

            this.flightForm.reset();
            this.isSubmitting = false;
            this.showConfirmationModal = true;
        } else {
            this.markFormGroupTouched(this.flightForm);
        }
    }

    // Helper method to mark all controls as touched
    private markFormGroupTouched(formGroup: FormGroup) {
        Object.values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control instanceof FormGroup) {
                this.markFormGroupTouched(control);
            }
        });
    }

    // Validation methods
    validateFutureDate(control: AbstractControl): {[key: string]: any} | null {
        if (!control.value) return null;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const inputDate = new Date(control.value);
        return inputDate < today ? { 'pastDate': true } : null;
    }

    // Getter methods for template
    get nameControl() { return this.flightForm.get('name'); }
    get emailControl() { return this.flightForm.get('email'); }
    get phoneControl() { return this.flightForm.get('phone'); }
    get passportControl() { return this.flightForm.get('passport_number'); }
    get passportExpiryControl() { return this.flightForm.get('passport_expiry'); }

    // Error getters
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

    get passportError() {
        const control = this.passportControl;
        if (control?.touched) {
            if (control.hasError('required')) return 'Passport number is required';
            if (control.hasError('pattern')) return 'Please enter a valid passport number';
        }
        return null;
    }

    // Input handlers
    onPhoneInput(event: Event) {
        const input = event.target as HTMLInputElement;
        input.value = input.value.replace(/\D/g, '').substring(0, 10);
        this.phoneControl?.setValue(input.value);
    }

    onPassportInput(event: Event) {
        const input = event.target as HTMLInputElement;
        input.value = input.value.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 9);
        this.passportControl?.setValue(input.value);
    }

    ngOnDestroy() {
        document.documentElement.style.removeProperty('--theme-color1');
        document.documentElement.style.removeProperty('--theme-color2');
    }
}
