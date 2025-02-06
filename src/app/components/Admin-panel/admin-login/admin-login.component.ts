import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../../../shared/components/header/header.component';
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

  message: string | null = null;
  messageType: 'success' | 'error' | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      emailOrPhone: ['', [this.emailOrPhoneValidator]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

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

  onSubmit() {
    if (this.loginForm.invalid) {
      this.message = 'Invalid form data!';
      this.messageType = 'error';
      return;
    }
  
    const formData = this.loginForm.value;
    const payload = {
      email: formData.emailOrPhone.includes('@') ? formData.emailOrPhone : undefined,
      phone: !formData.emailOrPhone.includes('@') ? formData.emailOrPhone : undefined,
      password: formData.password,
      role: 'admin',
    };
  
    this.authService.adminLogin(payload).subscribe(
      (response) => {
        this.message = 'Login successful!';
        this.messageType = 'success';
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'admin-dashboard';
        setTimeout(() => {
          this.message = null;
          this.messageType = null;
          this.router.navigate([returnUrl]);
        }, 1000);
      },
      (error) => {
        // Check if the backend sends an error message
        if (error.error && error.error.msg) {
          this.message = error.error.msg; // Display the actual error message
        } else {
          this.message = 'Invalid email/phone or password.'; // Default message if no custom message
        }
        this.messageType = 'error';
      }
    );
  }
  
}
