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
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HeaderComponent, FooterComponent, LayoutComponent],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false; // To toggle password visibility

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      emailOrPhone: ['', [this.emailOrPhoneValidator]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  // Custom validator for email or phone
  emailOrPhoneValidator(control: any) {
    const value = control.value || '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    const phoneRegex = /^[0-9]{10}$/; // 10-digit phone number
    if (!value || (!emailRegex.test(value) && !phoneRegex.test(value))) {
      return { invalidEmailOrPhone: true };
    }
    return null;
  }

  // Toggle password visibility
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

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

    this.authService.adminLogin(payload).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['admin-dashboard']);
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
