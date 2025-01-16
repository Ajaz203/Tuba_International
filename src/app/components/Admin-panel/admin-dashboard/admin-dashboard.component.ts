import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
  animations: [
    trigger('fadeSlide', [
      state('true', style({ opacity: 1, transform: 'translateY(0)' })),
      state('false', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition('true => false', animate('300ms ease-out')),
      transition('false => true', animate('300ms ease-in'))
    ])
  ]
})
export class AdminDashboardComponent {
 
 
      userData: any = {}; // User profile data
      flightBookings: any[] = [];
      hotelBookings: any[] = []; // Hotel bookings
      cabBookings: any[] = []; // Cab bookings
      tourBookings: any[] = []; // Tour bookings
      visaRequests: any[] = []; // Visa requests
      visaData: any[] = []; // Visa data
      contactRequests: any[] = []; // Contact requests
      totalBookingCount: number = 0; // Total number of bookings
      public email: string = ''; // User email for query parameters
    
      // Active Tab Management
      public activeTab: string = 'flights';
    
      // New properties for filtering
      searchQuery: string = '';
      statusFilter: string = 'all';
      dateFilter: string = '';
      filteredFlightBookings: any[] = []; // Filtered flight bookings
      filteredHotelBookings: any[] = []; // Filtered hotel bookings

    
      constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {
      

        // Fetch user data by email
        this.authService.getAdminData().subscribe(
          (response: any) => {
            if (response) {
              console.log('User data fetched successfully:', response);
              this.flightBookings = response.data.flightBookings; // Flight bookings
              console.log('Flight bookings:', this.flightBookings);
              this.userData = response.data.userData; // User profile data
              console.log('User data:', this.userData);
              this.hotelBookings = response.data.hotelBookings; // Hotel bookings
              console.log('Hotel bookings:', this.hotelBookings);
              this.cabBookings = response.data.cabBookings; // Cab bookings
              console.log('Cab bookings:', this.cabBookings);
              this.tourBookings = response.data.TourData; // Tour bookings (correct mapping)
              console.log('Tour bookings:', this.tourBookings);
              this.visaRequests = response.data.AllVisaData; // hajj/umrah/eVisa requests
              console.log('hajj/umrah/eVisa requests:', this.visaRequests);
              this.visaData = response.data.visaData; // Visa data
              console.log('Visa requests:', this.visaData); 
              this.contactRequests = response.data.ContactUsData; // Contact requests
              console.log('Contact requests:', this.contactRequests);
              this.totalBookingCount = response.totalBookings; // Set total bookings count
              
            } else {
              console.log('No user data found for email:', this.email);
            }
          },
          (error) => {
            console.error('Error fetching user data:', error);
          }
        );
      }
    
      
      
      
      ngOnInit() {
      }
      
      
      setActiveTab(tab: string): void {
        this.activeTab = tab;
      }
    
      
      logout() {
        this.router.navigate(['/Admin-login']);
        }
      
    }
    
    
    
