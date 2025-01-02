import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { LayoutComponent } from '../../../shared/components/ui/layout/layout.component';
import { PagesService } from '../../../shared/services/pages.service';
import { BreadcrumbsComponent } from '../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { AnimationComponent } from '../../../shared/components/comman/animation/animation.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VisaDetailsComponent } from '../widgets/visa-details/visa-details.component';
import { Router } from '@angular/router';
import { HotelService } from '../../../shared/services/hotel.service';
import { VisaConfirmationModalComponent } from './widgets/visa-confirmation-modal/visa-confirmation-modal.component';

// Move interface outside the class
interface FamilyMember {
  name: string;
  passport_number: string;
  relationship: string;
  age: number;
}

@Component({
  selector: 'app-apply-visa',
  standalone: true,
  providers: [PagesService, HotelService],
  templateUrl: './apply-visa.component.html',
  styleUrl: './apply-visa.component.scss',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    BreadcrumbsComponent,
    AnimationComponent,
    VisaDetailsComponent,
    VisaConfirmationModalComponent
  ]
})
export class ApplyVisaComponent implements OnInit {
  visaForm: FormGroup;
  isSubmitting = false;
  familyMembers: FormArray;
  showConfirmationModal = false;
  currentBooking: any;

  public bg_image = 'assets/imges2/breadcrumb1.jpg';
  public title = 'Visa';
  public parent = 'Home';
  public child = 'Apply Visa';

  visaTypes = [
    { id: 'tourist', name: 'Tourist Visa' },
    { id: 'business', name: 'Business Visa' },
    { id: 'student', name: 'Student Visa' },
    { id: 'work', name: 'Work Visa' }
  ];

 countries = [
    { code: 'US', name: 'United States' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'SG', name: 'Singapore' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'IT', name: 'Italy' },
    { code: 'ES', name: 'Spain' },
    { code: 'JP', name: 'Japan' },
    { code: 'KR', name: 'South Korea' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'TH', name: 'Thailand' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'PH', name: 'Philippines' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'MX', name: 'Mexico' },
    { code: 'BR', name: 'Brazil' },
    { code: 'GR', name: 'Greece' },
    { code: 'PT', name: 'Portugal' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'IT', name: 'Italy' },
    { code: 'TR', name: 'Turkey' },
    { code: 'EG', name: 'Egypt' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'IN', name: 'India' },
    { code: 'RU', name: 'Russia' },
    { code: 'AR', name: 'Argentina' },
    { code: 'CL', name: 'Chile' },
    { code: 'CO', name: 'Colombia' },
    { code: 'FI', name: 'Finland' },
    { code: 'NO', name: 'Norway' },
    { code: 'SE', name: 'Sweden' },
    { code: 'DK', name: 'Denmark' },
    { code: 'IE', name: 'Ireland' },
    { code: 'AT', name: 'Austria' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'BE', name: 'Belgium' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'HU', name: 'Hungary' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'HR', name: 'Croatia' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LV', name: 'Latvia' },
    { code: 'EE', name: 'Estonia' },
    { code: 'IS', name: 'Iceland' },
    { code: 'MT', name: 'Malta' },
    { code: 'PT', name: 'Portugal' },
    { code: 'MD', name: 'Moldova' },
    { code: 'AM', name: 'Armenia' },
    { code: 'GE', name: 'Georgia' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'NP', name: 'Nepal' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'LA', name: 'Laos' },
    { code: 'BN', name: 'Brunei' },
    { code: 'TL', name: 'Timor-Leste' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'PG', name: 'Papua New Guinea' },
    { code: 'WS', name: 'Samoa' },
    { code: 'TO', name: 'Tonga' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'CK', name: 'Cook Islands' },
    { code: 'NU', name: 'Niue' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'PW', name: 'Palau' },
    { code: 'AS', name: 'American Samoa' },
    { code: 'GU', name: 'Guam' },
    { code: 'MP', name: 'Northern Mariana Islands' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'VI', name: 'U.S. Virgin Islands' },
    { code: 'SX', name: 'Sint Maarten' },
    { code: 'BQ', name: 'Bonaire' },
    { code: 'CW', name: 'Curaçao' },
    { code: 'SX', name: 'Sint Maarten' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'DM', name: 'Dominica' },
    { code: 'GD', name: 'Grenada' },
    { code: 'HT', name: 'Haiti' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'KN', name: 'Saint Kitts and Nevis' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TC', name: 'Turks and Caicos Islands' },
    { code: 'VG', name: 'British Virgin Islands' },
    { code: 'KY', name: 'Cayman Islands' },
    { code: 'FM', name: 'Federated States of Micronesia' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'PW', name: 'Palau' },
    { code: 'WS', name: 'Samoa' },
    { code: 'TO', name: 'Tonga' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'CK', name: 'Cook Islands' },
    { code: 'NU', name: 'Niue' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'PW', name: 'Palau' },
    { code: 'AS', name: 'American Samoa' },
    { code: 'GU', name: 'Guam' },
    { code: 'MP', name: 'Northern Mariana Islands' },
    { code: 'PR', name: 'Puerto Rico' },
    { code: 'VI', name: 'U.S. Virgin Islands' },
    { code: 'SX', name: 'Sint Maarten' },
    { code: 'BQ', name: 'Bonaire' },
    { code: 'CW', name: 'Curaçao' },
    { code: 'SX', name: 'Sint Maarten' },
    { code: 'AI', name: 'Anguilla' },
    { code: 'AG', name: 'Antigua and Barbuda' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'DM', name: 'Dominica' },
    { code: 'GD', name: 'Grenada' },
    { code: 'HT', name: 'Haiti' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'KN', name: 'Saint Kitts and Nevis' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TC', name: 'Turks and Caicos Islands' },
    { code: 'VG', name: 'British Virgin Islands' },
    { code: 'KY', name: 'Cayman Islands' },
];

  constructor(
    private fb: FormBuilder, 
    private pagesService: PagesService,
    private router: Router,
    private hotelService: HotelService
  ) {
    this.initForm();
  }

  ngOnInit() {
    // Any initialization logic
  }

  private initForm() {
    this.visaForm = this.fb.group({
      name: ['', [
        Validators.required, 
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z\s]*$/)
      ]],
      passport_number: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contact_no: ['', [Validators.required]],
      visa_type: ['', [Validators.required]],
      travel_date: ['', [Validators.required]],
      visa_duration: ['', [Validators.required]],
      destination_country: ['', Validators.required],
      
      // Optional fields
      nationality: [''],
      date_of_birth: [''],
      address: [''],
      purpose_of_visit: [''],
      have_previous_visa: [false],
      previous_visa_details: [''],
      remarks: [''],
      family_members: this.fb.array([])
    });

    // Debug form validation
    this.visaForm.statusChanges.subscribe(status => {
      console.log('Form Status:', status);
      console.log('Form Errors:', this.visaForm.errors);
      console.log('Form Valid:', this.visaForm.valid);
    });

    this.familyMembers = this.visaForm.get('family_members') as FormArray;

    // Enable/disable previous visa details based on checkbox
    this.visaForm.get('have_previous_visa')?.valueChanges.subscribe(value => {
      const previousVisaControl = this.visaForm.get('previous_visa_details');
      if (value) {
        previousVisaControl?.enable();
      } else {
        previousVisaControl?.disable();
      }
    });
  }

  onSubmit() {
    if (this.visaForm.valid) {
      this.isSubmitting = true;

      const bookingData = {
        ...this.visaForm.value,
        booking_type: 'visa',
        status: 'pending',
        created_at: new Date().toISOString()
      };

      this.hotelService.bookVisa(bookingData).subscribe({
        next: (response: any) => {
          console.log('Visa application successful:', response);
          
          this.currentBooking = {
            ...bookingData,
            booking_id: response?.booking_id || `VISA${Date.now()}`,
            status: response?.status || 'confirmed'
          };
          
          // Store booking data
          this.hotelService.setBookingData(this.currentBooking);
          
          // Reset form and show confirmation
          this.visaForm.reset();
          this.isSubmitting = false;
          this.showConfirmationModal = true;
        },
        error: (error) => {
          console.error('Application failed:', error);
          this.isSubmitting = false;
          alert(error?.error?.message || 'Application failed. Please try again.');
        }
      });
    } else {
      // If form is invalid, mark all fields as touched to show errors
      this.markFormGroupTouched(this.visaForm);
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

  // Getter methods for template
  get nameControl() { return this.visaForm.get('name'); }
  get passportControl() { return this.visaForm.get('passport_number'); }
  get emailControl() { return this.visaForm.get('email'); }
  get contactControl() { return this.visaForm.get('contact_no'); }
  get visaTypeControl() { return this.visaForm.get('visa_type'); }
  get visaDurationControl() { return this.visaForm.get('visa_duration'); }
  get destinationCountryControl() { return this.visaForm.get('destination_country'); }

  // Add these methods
  createFamilyMember(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      passport_number: ['', [Validators.required, Validators.pattern(/^[A-Z0-9]{8,9}$/)]],
      relationship: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0), Validators.max(120)]]
    });
  }

  addFamilyMember() {
    this.familyMembers.push(this.createFamilyMember());
  }

  removeFamilyMember(index: number) {
    this.familyMembers.removeAt(index);
  }

  get getFamilyMembers() {
    return this.visaForm.get('family_members') as FormArray;
  }

  // Add a helper method for passport validation messages
  get passportError() {
    const control = this.visaForm.get('passport_number');
    if (control?.touched) {
      if (control.hasError('required')) {
        return 'Passport number is required';
      }
      if (control.hasError('pattern')) {
        return 'Please enter a valid passport number (6-12 characters, letters and numbers only)';
      }
    }
    return null;
  }

  // Add this method to check form validity
  isFormValid(): boolean {
    const requiredFields = [
      'name',
      'passport_number',
      'email',
      'contact_no',
      'visa_type',
      'travel_date',
      'visa_duration',
      'destination_country'
    ];

    return requiredFields.every(field => {
      const control = this.visaForm.get(field);
      return control && control.valid && control.touched;
    });
  }

  // Add this method to handle passport input
  onPassportInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.visaForm.patchValue({
      passport_number: value.toUpperCase()
    }, { emitEvent: false });
  }

  // Add method to handle modal close
  onModalClose() {
    this.showConfirmationModal = false;
    this.router.navigate(['/']);
  }
 

  get phoneControl() {
    return this.visaForm.get('contact_no');
  }
   get phoneError(): string {
    if (this.phoneControl?.errors) {
      if (this.phoneControl.errors['required']) {
        return '';
      }
      if (this.phoneControl.errors['pattern']) {
        return 'Please enter a valid 10-digit phone number';
      }
      if (this.phoneControl.errors['minlength']) {
        return 'Phone number must be 10 digits';
      }
    }
    return '';
  }
  onPhoneInput(event: Event) {
   const input = event.target as HTMLInputElement;
   input.value = input.value.replace(/[^0-9]/g, '');
   if (input.value.length > 10) {
     input.value = input.value.slice(0, 10);
   }
   this.phoneControl?.setValue(input.value);
 }

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
}
