import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comman-login-form',
  templateUrl: './comman-login-form.component.html',
  styleUrls: ['./comman-login-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class CommanLoginFormComponent implements OnInit {
  @Input() type: string = 'login'; // Default type is 'login'

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      fullName: [
        '',
        this.type === 'register' ? [Validators.required] : [],
      ],
      emailOrUsername: [
        '',
        [Validators.required, Validators.email],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6)],
      ],
      phone: [
        '',
        this.type === 'register' ? [Validators.required, Validators.pattern(/^[0-9]{10}$/)] : [], // Phone number only for registration
      ],
      rememberMe: [false], // Only applicable for login
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const formData = this.loginForm.value;

    if (this.type === 'register') {
      this.authService.register(formData).subscribe(
        (response) => {
          console.log('Register Successful:', response);
          this.router.navigate(['login']);
        },
        (error) => {
          console.error('Register Error:', error);
        }
      );
    } else if (this.type === 'login') {
      this.authService.login(formData).subscribe(
        (response) => {
          console.log('Login Successful:', response);
          this.router.navigate(['user-dashboard'], {
            queryParams: { email: formData.emailOrUsername },
          });
        },
        (error) => {
          console.error('Login Error:', error);
        }
      );
    }
  }

  
  toggleType(): void {
    if (this.type === 'register') {
      this.type = 'login';
      this.router.navigate(['/page/other-pages/login']);
    } else {
      this.type = 'register';
      this.router.navigate(['/page/other-pages/register']);
    }
    this.ngOnInit(); // Reinitialize the form with the new type
  }
  

  goToForgotPassword(): void {
    this.router.navigate(['forgot-password']);
  }
}
