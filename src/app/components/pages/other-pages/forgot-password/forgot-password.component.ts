import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ BreadcrumbsComponent, HeaderComponent, LayoutComponent, FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent implements OnInit {
  // public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'log in';
  public parent = 'Home';
  public child = 'log in';
  forgotForm: FormGroup;
  newPasswordForm: FormGroup;
  showNewPasswordForm: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Forgot Password Form
    this.forgotForm = this.fb.group({
      emailOrUsername: ['', [Validators.required, Validators.email]],
    });

    // New Password Form
    this.newPasswordForm = this.fb.group({
      otp: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  onForgotSubmit(): void {
    console.log('Forgot Form submitted:', this.forgotForm.value);

    if (this.forgotForm.invalid) {
      console.log('Forgot Form is invalid');
      return;
    }

    const payload = { emailOrUsername: this.forgotForm.value.emailOrUsername };

    this.authService.sendEmailOtp(payload).subscribe(
      (response) => {
        const res = response as { msg: string; status: string };
        console.log('OTP sent successfully:', res);

        if (res.status === "true") {
          this.showNewPasswordForm = true;
        } else {
          console.error('Failed to send OTP:', res.msg);
        }
      },
      (error) => {
        console.error('Error sending OTP:', error);
      }
    );
  }

  onNewPasswordSubmit(): void {
    console.log('New Password Form submitted:', this.newPasswordForm.value);

    if (this.newPasswordForm.invalid) {
      console.log('New Password Form is invalid');
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
        this.router.navigate(['log-in']); 
      },
      (error) => {
        console.error('Error resetting password:', error);
      }
    );
  }
}
