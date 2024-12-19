import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { TourBookingDetailsComponent } from '../widgets/tour-booking-details/tour-booking-details.component';
import { AnimationComponent } from '../../../../shared/components/comman/animation/animation.component';
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
    TourBookingDetailsComponent,AnimationComponent
  ],
  templateUrl: './tour-booking.component.html',
  styleUrls: ['./tour-booking.component.scss']
})
export class TourBookingComponent implements OnInit {
  tourForm: FormGroup;
  isSubmitting = false;

  public bg_image = 'assets/imges2/spain4.jpg';
  public title = 'Tour Booking';
  public parent = 'Home';
  public subParent = "holidays";
  public child = 'Booking';

  tourPackages: TourPackage[] = [
    { id: 'europe', name: 'European Destinations', duration: '15 Days' },
    { id: 'asia', name: 'Asian Destinations', duration: '12 Days' },
    { id: 'america', name: 'American Destinations', duration: '14 Days' },
    { id: 'australia', name: 'Australian Destinations', duration: '10 Days' },
    { id: 'africa', name: 'African Destinations', duration: '12 Days' }
  ];

  tourTypes = [
    { id: 'group', name: 'Group Tour' },
    { id: 'private', name: 'Private Tour' },
    { id: 'custom', name: 'Custom Tour' },
    { id: 'luxury', name: 'Luxury Tour' }
  ];

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
    // Any initialization logic
  }

  private initForm() {
    this.tourForm = this.fb.group({
      // Personal Information
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      
      // Tour Details
      tour_type: ['', Validators.required],
      destination: ['', Validators.required],
      travel_date: ['', Validators.required],
      duration: ['', Validators.required],
      
      // Preferences
      meal_preference: ['', Validators.required],
      special_requirements: [''],
      
      // Additional Services
      airport_pickup: [false],
      travel_insurance: [false],
      guided_tours: [false]
    });

    // Debug form validation
    this.tourForm.statusChanges.subscribe(status => {
      console.log('Form Status:', status);
      console.log('Form Valid:', this.tourForm.valid);
    });
  }

  onSubmit() {
    if (this.tourForm.valid) {
      this.isSubmitting = true;
      console.log('Tour Booking Form:', this.tourForm.value);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Tour booked successfully');
        this.isSubmitting = false;
        this.tourForm.reset();
      }, 1500);
    } else {
      this.markFormGroupTouched(this.tourForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  isFormValid(): boolean {
    const requiredFields = [
      'name',
      'email',
      'phone',
      'tour_type',
      'destination',
      'travel_date',
      'duration',
      'meal_preference'
    ];

    return requiredFields.every(field => {
      const control = this.tourForm.get(field);
      return control && control.valid && control.touched;
    });
  }

  // Getter methods for template
  get nameControl() { return this.tourForm.get('name'); }
  get emailControl() { return this.tourForm.get('email'); }
  get phoneControl() { return this.tourForm.get('phone'); }
  get tourTypeControl() { return this.tourForm.get('tour_type'); }
  get destinationControl() { return this.tourForm.get('destination'); }
  get durationControl() { return this.tourForm.get('duration'); }
  get mealPreferenceControl() { return this.tourForm.get('meal_preference'); }
  get travelDateControl() { return this.tourForm.get('travel_date'); }

  get nameError() {
    const control = this.tourForm.get('name');
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Full name is required';
      }
      if (control.hasError('minlength')) {
        return 'Full name must be at least 3 characters';
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

  get tourTypeError() {
    const control = this.tourForm.get('tour_type');
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Tour type is required';
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
}
