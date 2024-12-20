import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { CabBookingSummaryComponent } from '../widgets/cab-booking-summary/cab-booking-summary.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
import { HotelService } from '../../../../shared/services/hotel.service';
import { Router } from '@angular/router';
import { CabInformationComponent } from '../widgets/cab-information/cab-information.component';
import { BookingConfirmationModalComponent } from '../widgets/booking-confirmation-modal/booking-confirmation-modal.component';
@Component({
  selector: 'app-cab-booking',
  templateUrl: './cab-booking.component.html',
  styleUrls: ['./cab-booking.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    BreadcrumbsComponent,
    CabBookingSummaryComponent,
    AnimationComponent,
    CabInformationComponent,
    BookingConfirmationModalComponent
  ]
})
export class CabBookingComponent implements OnInit {
  cabForm: FormGroup;
  isSubmitting = false;
  showConfirmationModal = false;
  currentBooking: any;

  public bg_image = 'assets/imges2/car-banner.jpg';
  public title = 'Cab Booking';
  public parent = 'Home';
  public child = 'Booking';

  additionalServices = [
    { id: 'child_seat', label: 'Child Seat' },
    { id: 'airport_pickup', label: 'Airport Pickup' },
    
  ];

  constructor(
    private fb: FormBuilder,
    private hotelService: HotelService,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit() {
    // Set theme colors
    document.documentElement.style.setProperty('--theme-color1', '233, 179, 14');
    document.documentElement.style.setProperty('--theme-color2', '233, 179, 14');
  }

  ngOnDestroy() {
    // Clean up theme colors
    document.documentElement.style.removeProperty('--theme-color1');
    document.documentElement.style.removeProperty('--theme-color2');
  }

  private initForm() {
    this.cabForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      contact_no: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      passengers: ['', [Validators.required, Validators.min(1), Validators.max(6)]],
      pickup: ['', Validators.required],
      dropoff: ['', Validators.required],
      pickupDate: ['', [Validators.required, this.validatePickupDate]],
      pickupTime: ['', Validators.required],
      specialRequirements: [''],
      child_seat: [false],
      airport_pickup: [false],
      wheelchair: [false],
      vehicleType: ['', Validators.required]
    });
  }

  validatePickupDate(control: AbstractControl): {[key: string]: any} | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return { 'pastDate': true };
    }
    return null;
  }

  hasSpecialRequirements(): boolean {
    return this.additionalServices.some(service => 
      this.cabForm.get(service.id)?.value === true
    );
  }

  isFormValid(): boolean {
    return this.cabForm.valid;
  }

  onSubmit() {
    if (this.cabForm.valid) {
      this.isSubmitting = true;

      const bookingData = {
        ...this.cabForm.value,
        booking_type: 'cab',
        status: 'pending',
        created_at: new Date().toISOString()
      };

      this.hotelService.bookCab(bookingData).subscribe({
        next: (response: any) => {
          console.log('Booking successful:', response);
          
          this.currentBooking = {
            ...bookingData,
            booking_id: response?.booking_id || `CAB${Date.now()}`,
            status: response?.status || 'confirmed'
          };
          
          // Store booking data in service
          this.hotelService.setBookingData(this.currentBooking);
          
          // Reset form and show confirmation
          this.cabForm.reset();
          this.isSubmitting = false;
          this.showConfirmationModal = true;
        },
        error: (error) => {
          console.error('Booking failed:', error);
          this.isSubmitting = false;
          alert(error?.error?.message || 'Booking failed. Please try again.');
        }
      });
    } else {
      Object.keys(this.cabForm.controls).forEach(key => {
        const control = this.cabForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }

  onModalClose() {
    this.showConfirmationModal = false;
    this.router.navigate(['/']);
  }

  // Getter methods for form controls
  get nameControl() { return this.cabForm.get('name'); }
  get emailControl() { return this.cabForm.get('email'); }
  get contactNoControl() { return this.cabForm.get('contact_no'); }
  get passengersControl() { return this.cabForm.get('passengers'); }
  get pickupControl() { return this.cabForm.get('pickup'); }
  get dropoffControl() { return this.cabForm.get('dropoff'); }
  get pickupDateControl() { return this.cabForm.get('pickupDate'); }
  get pickupTimeControl() { return this.cabForm.get('pickupTime'); }
  get vehicleTypeControl() { return this.cabForm.get('vehicleType'); }

  // Error message getters
  get nameError() {
    const control = this.nameControl;
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Name is required';
      }
      if (control.hasError('minlength')) {
        return 'Name must be at least 3 characters';
      }
    }
    return null;
  }

  get emailError() {
    const control = this.emailControl;
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Email is required';
      }
      if (control.hasError('email')) {
        return 'Please enter a valid email';
      }
    }
    return null;
  }

  get contactNoError() {
    const control = this.contactNoControl;
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Contact number is required';
      }
      if (control.hasError('pattern')) {
        return 'Please enter a valid 10-digit contact number';
      }
    }
    return null;
  }

  get vehicleTypeError() {
    const control = this.vehicleTypeControl;
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Please select a vehicle type';
      }
    }
    return null;
  }
}
