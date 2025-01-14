import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://tuba-mongo-backend.onrender.com/';

  constructor( private http: HttpClient) { }

  login(data: any) {
    return this.http.post(`${this.apiUrl}login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.apiUrl}register`, data);
  }

  sendEmailOtp(data: any) {
    return this.http.post(`${this.apiUrl}forget-password/send-otp`, data);
  }

  resetPassword(data: any) {
    return this.http.post(`${this.apiUrl}forget-password/verify-otp`, data);
  }
 getAllUserData () {  
    return this.http.get(`${this.apiUrl}users`);
  }

  getUserByEmail(email: string) {
    const payload = { emailOrUsername: email };
    return this.http.post(`${this.apiUrl}user-dashboard`, payload);
  }
  hajjVisa(data: any) {
    return this.http.post(`${this.apiUrl}applyHajj`, data);
  }

  Evisa(data: any) {
    return this.http.post(`${this.apiUrl}applyEVisa`, data);
  }
  
getAdminData( ) {
  return this.http.get(this.apiUrl + `admin-panel` );
}
adminLogin(data: any) {
  return this.http.post(`${this.apiUrl}adminLogin`, data);
}

}
