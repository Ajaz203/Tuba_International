import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD
  private apiUrl = 'https://tuba-mongo-backend.onrender.com/';
  private isAuthenticated = new BehaviorSubject<boolean>(false); // Tracks authentication status
  private userRole = new BehaviorSubject<string | null>(null); // Tracks user role
  private userEmail = new BehaviorSubject<string | null>(null); // Tracks user email
=======
  getVisaRequests() {
    throw new Error('Method not implemented.');
  }
  apiUrl = 'https://tuba-mongo-backend.onrender.com/';
>>>>>>> 067b276211b18b10da5b2bff91588ab914c38809

  constructor(private http: HttpClient) {}

  // Admin Login
  adminLogin(data: any): Observable<any> {
    return new Observable((observer) => {
      this.http.post(`${this.apiUrl}adminLogin`, data).subscribe(
        (response: any) => {
          if (response.msg === 'Login successful.' && response.emailOrUsername) {
            this.isAuthenticated.next(true);
            this.userEmail.next(response.emailOrUsername); // Store the email
            observer.next(response);
          } else {
            observer.error({ success: false, message: 'Unauthorized' });
          }
        },
        (error) => {
          observer.error(error); // Emit the error
        }
      );
    });
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.isAuthenticated.value;
  }

  // Get logged in user's email
  getLoggedInEmail(): string | null {
    return this.userEmail.value;
  }

  // Logout the user
  logout(): void {
    this.isAuthenticated.next(false);
    this.userEmail.next(null);
  }



  // User Login
  login(data: any): Observable<any> {
    return new Observable((observer) => {
      this.http.post(`${this.apiUrl}login`, data).subscribe(
        (response: any) => {
          if (response.msg === 'Login successful.') {
            this.isAuthenticated.next(true); // Mark as logged in
            this.userEmail.next(response.email); // Store the email if provided
            observer.next(response);
          } else {
            observer.error({ success: false, message: 'Unauthorized' });
          }
        },
        (error) => {
          observer.error(error); // Emit the error
        }
      );
    });
  }


  // User Registration
  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}register`, data);
  }

  // Forget Password - Send OTP
  sendEmailOtp(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}forget-password/send-otp`, data);
  }

  // Forget Password - Reset Password
  resetPassword(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}forget-password/verify-otp`, data);
  }

  // Get All Users
  getAllUserData(): Observable<any> {
    return this.http.get(`${this.apiUrl}users`);
  }

  // Get User by Email
  getUserByEmail(email: string): Observable<any> {
    const payload = { emailOrUsername: email };
    return this.http.post(`${this.apiUrl}user-dashboard`, payload);
  }

  // Hajj Visa Application
  hajjVisa(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}applyHajj`, data);
  }

  // E-Visa Application
  Evisa(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}applyEVisa`, data);
  }

  // Get Admin Data
  getAdminData(): Observable<any> {
    return this.http.get(`${this.apiUrl}admin-panel`);
  }

  
}
