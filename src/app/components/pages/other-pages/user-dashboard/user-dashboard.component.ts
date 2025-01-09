import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../shared/services/auth.service';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss',
  standalone: true,
  imports: [CommonModule, FormsModule],
  animations: [
    trigger('fadeSlide', [
      state('true', style({ opacity: 1, transform: 'translateY(0)' })),
      state('false', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition('true => false', animate('300ms ease-out')),
      transition('false => true', animate('300ms ease-in'))
    ])
  ]
})
export class UserDashboardComponent {
  userData: any = {}; // User profile data
  flightBookings: any[] = []; // Flight bookings
  hotelBookings: any[] = []; // Hotel bookings
  cabBookings: any[] = []; // Cab bookings
  tourBookings: any[] = []; // Tour bookings
  visaRequests: any[] = []; // Visa requests
  public email: string = ''; // User email for query parameters

  // Active Tab Management
  public activeTab: string = 'flights';

  constructor(private route: ActivatedRoute, private authService: AuthService) {
    this.route.queryParams.subscribe(params => {
      if (params['email']) {
        this.email = params['email'];
        console.log('User email:', this.email);

        // Fetch user data by email
        this.authService.getUserByEmail(this.email).subscribe(
          (response: any) => {
            if (response) {
              console.log('User data fetched successfully:', response);
              this.userData = response.data.userData; // User profile data
              this.flightBookings = response.data.flightBookings; // Flight bookings
              this.hotelBookings = response.data.hotelBookings; // Hotel bookings
              this.cabBookings = response.data.cabBookings; // Cab bookings
              this.tourBookings = response.data.tourBookings; // Tour bookings
              this.visaRequests = response.data.visaRequests; // Visa requests
            } else {
              console.log('No user data found for email:', this.email);
            }
          },
          (error) => {
            console.error('Error fetching user data:', error);
          }
        );
      }
    });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  calculateNights(checkIn: string, checkOut: string): number {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const diffTime = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  
}


