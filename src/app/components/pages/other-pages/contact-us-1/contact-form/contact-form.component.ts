import { Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.scss',
    standalone: true, 
    imports: [FormsModule,ReactiveFormsModule],
})
export class ContactFormComponent {
    contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      const apiUrl = 'https://tuba-mongo-backend.onrender.com/contactUs';

      this.http.post(apiUrl, formData).subscribe({
        next: (response) => {
          alert('Your message has been sent successfully!');
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
