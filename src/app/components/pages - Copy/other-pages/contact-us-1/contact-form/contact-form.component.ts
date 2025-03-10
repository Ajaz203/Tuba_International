import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModalModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgbModalModule, CommonModule],
})
export class ContactFormComponent {
  contactForm: FormGroup;

  @ViewChild('successModal') successModal: TemplateRef<any>;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private modalService: NgbModal
  ) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]], // Ensure exactly 10 digits
      email: ['', [Validators.required, this.emailValidator]],
      message: ['', Validators.required],
    });
  }

  // Restrict input to digits only
  validatePhoneNumber(event: any): void {
    const value = event.target.value;

    // Remove all non-numeric characters
    event.target.value = value.replace(/[^0-9]/g, '');

    // Manually update the form control's value after the change
    this.contactForm.get('phoneNumber')?.setValue(event.target.value);
  }

  open(content: any) {
    const modalRef = this.modalService.open(content);

    setTimeout(() => {
      modalRef.close();
    }, 3000);
  }


  emailValidator(control: any) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!control.value) {
      return null;  // valid if the field is empty, since it's also required
    }
    if (emailPattern.test(control.value)) {
      return null;  // valid email
    } else {
      return { invalidEmail: true };  // invalid email
    }
  }
  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      const apiUrl = 'https://tuba-mongo-backend.onrender.com/contactUs';

      this.http.post(apiUrl, formData).subscribe({
        next: (response) => {
          this.open(this.successModal);
          console.log('Response:', response);
          this.contactForm.reset();
        },
        error: (error) => {
          alert('An error occurred while sending your message.');
          console.error('Error:', error);
        },
      });
    } else {
      alert('Please fill out the form correctly before submitting.');
    }
  }
}
