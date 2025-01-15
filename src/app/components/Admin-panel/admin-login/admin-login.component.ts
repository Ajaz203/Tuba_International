import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router'; // Import Router
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { LayoutComponent } from '../../../shared/components/ui/layout/layout.component';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, LayoutComponent],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;
  message: string | null = null;  // Holds the alert message
  messageType: 'success' | 'error' | null = null;  // Holds the type of the message ('success' or 'error')

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      emailOrPhone: ['', [this.emailOrPhoneValidator]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  // Custom validator for email or phone
  emailOrPhoneValidator(control: any) {
    const value = control.value || '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!value || (!emailRegex.test(value) && !phoneRegex.test(value))) {
      return { invalidEmailOrPhone: true };
    }
    return null;
  }

  // Toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Close the alert message
  closeMessage() {
    this.message = null;
    this.messageType = null;
  }

  // On form submission
  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const formData = this.loginForm.value;
    const payload = {
      email: formData.emailOrPhone.includes('@') ? formData.emailOrPhone : undefined,
      phone: !formData.emailOrPhone.includes('@') ? formData.emailOrPhone : undefined,
      password: formData.password,
      role: 'admin',
    };

    console.log('Form data:', payload);

    // Attempt login
    this.authService.adminLogin(payload).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.message = 'Login successful!';
        this.messageType = 'success';
        
        // Reset the form and message after 3 seconds
        setTimeout(() => {
          this.message = null; // Clear message
          this.messageType = null; // Clear message type
          this.loginForm.reset(); // Reset the form
        }, 3000); // 3 seconds delay

        this.router.navigate(['admin-dashboard']);
      },
      (error) => {
        console.error('Login failed:', error);
        this.message = 'Invalid email/phone or password. Please try again.';
        this.messageType = 'error';
        
        // Reset the form and message after 3 seconds
        setTimeout(() => {
          this.message = null; // Clear message
          this.messageType = null; // Clear message type
          this.loginForm.reset(); // Reset the form
        }, 3000); // 3 seconds delay
      }
    );
  }
}
