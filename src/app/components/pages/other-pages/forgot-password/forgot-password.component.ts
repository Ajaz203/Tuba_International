import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [  HeaderComponent, LayoutComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent implements OnInit {
  public message: string | null = null; // Initialize message
  public messageType: 'success' | 'error' | null = null; // Initialize messageType
  forgotForm: FormGroup;
  newPasswordForm: FormGroup;
  showNewPasswordForm: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Initialize forms
    this.forgotForm = this.fb.group({
      emailOrUsername: ['', [Validators.required, Validators.email]],
    });

    this.newPasswordForm = this.fb.group({
      otp: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  onForgotSubmit(): void {
    console.log('Forgot Form submitted:', this.forgotForm.value);

    if (this.forgotForm.invalid) {
      console.log('Forgot Form is invalid');
      this.setMessage('Please enter a valid email or username.', 'error');
      return;
    }

    const payload = { emailOrUsername: this.forgotForm.value.emailOrUsername };

    this.authService.sendEmailOtp(payload).subscribe(
      (response) => {
        const res = response as { msg: string; status: string };
        console.log('OTP sent successfully:', res);

        if (res.status === "true") {
          this.showNewPasswordForm = true;
          this.setMessage('OTP sent successfully! Please check your email or SMS.', 'success');
        } else {
          console.error('Failed to send OTP:', res.msg);
          this.setMessage('Failed to send OTP: ' + res.msg, 'error');
        }
      },
      (error) => {
        console.error('Error sending OTP:', error);
        this.setMessage('Error sending OTP. Please try again.', 'error');
      }
    );
  }

  onNewPasswordSubmit(): void {
    console.log('New Password Form submitted:', this.newPasswordForm.value);
    
    if (this.newPasswordForm.invalid) {
      console.log('New Password Form is invalid');
      this.setMessage('Please fill in all required fields correctly.', 'error');
      return;
    }

    const payload = {
      emailOrUsername: this.forgotForm.value.emailOrUsername, // Include email/username
      otp: this.newPasswordForm.value.otp,
      newPassword: this.newPasswordForm.value.newPassword,
    };

    this.authService.resetPassword(payload).subscribe(
      (response) => {
        console.log('Password reset successfully:', response);
        this.setMessage('Password reset successfully! You can now log in.', 'success');
        this.router.navigate(['log-in']);
      },
      (error) => {
        console.error('Error resetting password:', error);
        this.setMessage('Error resetting password. Please try again.', 'error');
      }
    );
  }

  private setMessage(msg: string, type: 'success' | 'error'): void {
    this.message = msg;
    this.messageType = type;

    // Clear the message after 3 seconds
    setTimeout(() => {
      this.message = null;
      this.messageType = null;
    }, 3000);
  }
}
