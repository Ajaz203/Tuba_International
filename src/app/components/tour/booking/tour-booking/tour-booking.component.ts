import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { TourBookingDetailsComponent } from '../widgets/tour-booking-details/tour-booking-details.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
import { TourConfirmationModalComponent } from '../widgets/tour-confirmation-modal/tour-confirmation-modal.component';
import { TourService } from '../../../../shared/services/tour.service';
import { Router } from '@angular/router';

interface TourPackage {
  id: string;
  name: string;
  duration: string;
}

@Component({
  selector: 'app-tour-booking',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    BreadcrumbsComponent,
    TourBookingDetailsComponent,AnimationComponent,
    TourConfirmationModalComponent
  ],
  templateUrl: './tour-booking.component.html',
  styleUrls: ['./tour-booking.component.scss']
})
export class TourBookingComponent implements OnInit {
  tourForm: FormGroup;
  isSubmitting = false;
  showConfirmationModal = false;
  currentBooking: any;

  public bg_image = 'assets/imges2/tour-bg2.jpg';
  public title = 'Tour Booking';
  public parent = 'Home';
  public subParent = "";
  public child = 'Booking';

  tourPackages: TourPackage[] = [
    { id: 'manali', name: 'Manali - Himachal Pradesh', duration: '5-7 Days' },
    { id: 'jaipur', name: 'Jaipur - Rajasthan', duration: '3-5 Days' },
    { id: 'shimla', name: 'Shimla - Himachal Pradesh', duration: '4-6 Days' },
    { id: 'goa', name: 'Goa - Beach Paradise', duration: '4-7 Days' },
    { id: 'kerala', name: 'Kerala - Backwaters', duration: '5-8 Days' },
    { id: 'agra', name: 'Agra - Taj Mahal', duration: '2-3 Days' },
    { id: 'udaipur', name: 'Udaipur - City of Lakes', duration: '3-5 Days' },
    { id: 'darjeeling', name: 'Darjeeling - Tea Gardens', duration: '4-6 Days' }
  ];

  tourTypes = [
    { id: 'group', name: 'Group Tour' },
    { id: 'private', name: 'Private Tour' },
    { id: 'custom', name: 'Custom Tour' },
    { id: 'luxury', name: 'Luxury Tour' }
  ];

  tourDurations = [
    { value: '3', label: '3 Days' },
    { value: '5', label: '5 Days' },
    { value: '7', label: '7 Days' },
    { value: '10', label: '10 Days' },
    { value: '15', label: '15 Days' }
  ];

  additionalServices = [
    { id: 'airport_pickup', label: 'Airport Pickup & Drop' },
    { id: 'local_guide', label: 'Local Guide' },
   
 
    
  ];

  constructor(private fb: FormBuilder, private tourService: TourService, private router: Router) {
    this.initForm();
  }

  ngOnInit() {
    // Any initialization logic
  }

  private initForm() {
    const formGroup: any = {
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      destination: ['', Validators.required],
      travel_date: ['', [Validators.required, this.validateTravelDate.bind(this)]],
      duration: ['', Validators.required],
      members: ['', [Validators.min(1), Validators.max(20)]],
      meal_preference: [''],
      requirements_details: ['']
    };

    // Add form controls for each service
    this.additionalServices.forEach(service => {
      formGroup[service.id] = [false]; // Initialize checkbox as unchecked
    });

    this.tourForm = this.fb.group(formGroup);
  }

  onSubmit() {
    if (this.tourForm.valid) {
      this.isSubmitting = true;

      const bookingData = {
        ...this.tourForm.value,
        booking_type: 'tour',
        status: 'pending',
        created_at: new Date().toISOString()
      };

      this.tourService.bookTour(bookingData).subscribe({
        next: (response: any) => {
          console.log('Tour booking successful:', response);
          
          this.currentBooking = {
            ...bookingData,
            booking_id: response?.booking_id || `TOUR${Date.now()}`,
            status: response?.status || 'confirmed'
          };
          
          // Store booking data
          this.tourService.setBookingData(this.currentBooking);
          
          // Reset form and show confirmation
          this.tourForm.reset();
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
      Object.keys(this.tourForm.controls).forEach(key => {
        const control = this.tourForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  isFormValid(): boolean {
    const requiredFields = [
      'name',
      'email',
      'phone',
      'destination',
      'travel_date',
      'duration'
    ];

    return requiredFields.every(field => {
      const control = this.tourForm.get(field);
      return control && control.valid && control.value;
    });
  }

  // Getter methods for template
  get nameControl() { return this.tourForm.get('name'); }
  get emailControl() { return this.tourForm.get('email'); }
  get phoneControl() { return this.tourForm.get('phone'); }
  get destinationControl() { return this.tourForm.get('destination'); }
  get travelDateControl() { return this.tourForm.get('travel_date'); }
  get durationControl() { return this.tourForm.get('duration'); }
  get mealPreferenceControl() { return this.tourForm.get('meal_preference'); }
  get membersControl() { return this.tourForm.get('members'); }

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
    const control = this.tourForm.get('email');
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Email address is required';
      }
      if (control.hasError('email')) {
        return 'Please enter a valid email address';
      }
    }
    return null;
  }

  get phoneError() {
    const control = this.tourForm.get('phone');
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Mobile number is required';
      }
      if (control.hasError('pattern')) {
        return 'Please enter a valid mobile number';
      }
    }
    return null;
  }

  get destinationError() {
    const control = this.tourForm.get('destination');
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Destination is required';
      }
    }
    return null;
  }

  get travelDateError() {
    const control = this.tourForm.get('travel_date');
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Travel date is required';
      }
      if (control.hasError('pastDate')) {
        return 'Please select a future date';
      }
    }
    return null;
  }

  get durationError() {
    const control = this.tourForm.get('duration');
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Duration is required';
      }
    }
    return null;
  }

  get mealPreferenceError() {
    const control = this.tourForm.get('meal_preference');
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Meal preference is required';
      }
    }
    return null;
  }

  // Add this method to validate travel date
  validateTravelDate(control: AbstractControl): {[key: string]: any} | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return { 'pastDate': true };
    }
    return null;
  }

  // Update hasAnySpecialRequirement method
  hasAnySpecialRequirement(): boolean {
    return this.additionalServices.some(service => 
      this.tourForm.get(service.id)?.value === true
    );
  }

  // Add this getter for template use
  get isFormFilled(): boolean {
    return this.isFormValid();
  }

  onModalClose() {
    this.showConfirmationModal = false;
    this.router.navigate(['/']);
  }
}

