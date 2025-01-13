import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../../shared/services/auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-comman-login-form',
  templateUrl: './comman-login-form.component.html',
  styleUrls: ['./comman-login-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
})
export class CommanLoginFormComponent implements OnInit {
  @Input() type: string = 'login'; // Default type is 'login'
  showPopup = false;
  loginForm: FormGroup;
  message: string = '';  // Message content
  messageType: string = ''; // 'success' or 'error'

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

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
        this.type === 'register'
          ? [Validators.required, Validators.pattern(/^[0-9]{10}$/)]
          : [],
      ], // Phone number only for registration
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
      this.handleRegister(formData);
    } else if (this.type === 'login') {
<<<<<<< HEAD
      this.authService.login(formData).subscribe(
        (response) => {
          console.log('Login Successful:', response);
          console.log('Calling showMessage...');
          this.showMessage('Login successful! Welcome back.', 'success');
          this.loginForm.reset(); // Reset the form after success
          this.router.navigate(['user-dashboard'], {
            queryParams: { email: formData.emailOrUsername },
          });
        },
        (error) => {
          console.error('Login Error:', error);
          this.showMessage('Login failed. Invalid credentials.', 'error');
          this.loginForm.reset(); // Reset the form after error
        }
      );
    }
  }
  
  closePopup() {
    this.showPopup = false;
  }
=======
      this.handleLogin(formData);
    }
  }
  
  private handleRegister(formData: any): void {
    this.authService.register(formData).subscribe({
      next: (response) => {
        console.log('Register Successful:', response);
        this.showMessage('Registration successful! You can now log in.', 'success');
        this.loginForm.reset(); // Reset the form after success
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.error('Register Error:', error);
        const message =
          error.status === 400
            ? 'User already exists, please log in.'
            : 'Registration failed, please try again.';
        this.showMessage(message, 'error');
        this.loginForm.reset(); // Reset the form after error
      },
    });
  }
  
  private handleLogin(formData: any): void {
    this.authService.login(formData).subscribe({
      next: (response) => {
        console.log('Login Successful:', response);
        this.showMessage('Login successful! Welcome back.', 'success'); // Ensure this line is executed
        this.loginForm.reset(); // Reset the form after success
        this.router.navigate(['user-dashboard'], {
          queryParams: { email: formData.emailOrUsername },
        });
      },
      error: (error) => {
        console.error('Login Error:', error);
        this.showMessage('Login failed. Invalid credentials.', 'error');
        this.loginForm.reset(); // Reset the form after error
      },
    });
  }
  
  
  
  
>>>>>>> 444b417024f304675b567b1e92d82027254a3ac6

  // Show or hide the message
  showMessage(message: string, type: string): void {
    console.log(`Displaying message: ${message}, Type: ${type}`);
    this.message = message;
    this.messageType = type;
  
    // Auto-close the message after 5 seconds
    setTimeout(() => {
      this.closeMessage();
    }, 5000);
  }
  

  // Close the message
  closeMessage(): void {
    this.message = '';
    this.messageType = '';
  }

  toggleType(): void {
    this.type = this.type === 'register' ? 'login' : 'register';
    this.router.navigate([`/page/other-pages/${this.type}`]);
  
    // Update validators dynamically
    if (this.type === 'register') {
      this.loginForm.get('fullName')?.setValidators([Validators.required]);
      this.loginForm.get('phone')?.setValidators([
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/),
      ]);
    } else {
      this.loginForm.get('fullName')?.clearValidators();
      this.loginForm.get('phone')?.clearValidators();
    }
  
    this.loginForm.get('fullName')?.updateValueAndValidity();
    this.loginForm.get('phone')?.updateValueAndValidity();
  }
  
  resetForm(): void {
    this.loginForm.reset();
    this.toggleType(); // Ensure validators are updated
  }
  
  goToForgotPassword(): void {
    this.router.navigate(['forgot-password']);
  }


    private messageSubject = new BehaviorSubject<{ message: string; type: string } | null>(null);
    message$ = this.messageSubject.asObservable();
  
  
    clearMessage() {
      this.messageSubject.next(null);
    }


}

