import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
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

  logout() {
    throw new Error('Method not implemented.');
    }
      userData: any = {}; // User profile data
      flightBookings: any[] = []; // Flight bookings
      hotelBookings: any[] = []; // Hotel bookings
      cabBookings: any[] = []; // Cab bookings
      tourBookings: any[] = []; // Tour bookings
      visaRequests: any[] = []; // Visa requests
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
    
      constructor(private route: ActivatedRoute, private authService: AuthService) {
    
            this.authService.getAdminData().subscribe(
              (response: any) => {
                if (response) {
                  console.log('User data fetched successfully:', response);
                  this.userData = response.data.userData; // User profile data
                  this.flightBookings = response.data.flightBookings; // Flight bookings
                  this.hotelBookings = response.data.hotelBookings; // Hotel bookings
                  this.cabBookings = response.data.cabBookings; // Cab bookings
                  this.tourBookings = response.data.TourData; // Tour bookings (correct mapping)
                  this.visaRequests = response.data.eVisaStampings;
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
    
      setActiveTab(tab: string): void {
        this.activeTab = tab;
      }
    
      
    
      ngOnInit() {
        
      }
    
    
    
    
      
    }
    
    
    
