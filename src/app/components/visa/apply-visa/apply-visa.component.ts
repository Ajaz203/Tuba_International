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
  providers: [PagesService],
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
    VisaDetailsComponent
  ]
})
export class ApplyVisaComponent implements OnInit {
  visaForm: FormGroup;
  isSubmitting = false;
  familyMembers: FormArray;

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
    // Add more countries as needed
  ];

  constructor(private fb: FormBuilder, private pagesService: PagesService) {
    this.initForm();
  }

  ngOnInit() {
    // Any initialization logic
  }

  private initForm() {
    this.visaForm = this.fb.group({
      // Required fields
      name: ['', [Validators.required]],
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
      console.log('Form Values:', this.visaForm.value);
      
      // Mark all fields as touched to trigger validation
      Object.keys(this.visaForm.controls).forEach(key => {
        const control = this.visaForm.get(key);
        control?.markAsTouched();
      });

      // Simulate API call
      setTimeout(() => {
        console.log('Application submitted successfully');
        this.isSubmitting = false;
        this.visaForm.reset();  // Reset form after submission
      }, 1500);
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
}
