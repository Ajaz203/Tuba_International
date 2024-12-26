import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

interface FlightBooking {
  from: string;
  to: string;
  flightNumber: string;
  date: Date;
  airline: string;
  departureTime: string;
  arrivalTime: string;
  status: 'Confirmed' | 'Cancelled' | 'Pending' ;
  price: number;
  passengers: number;
}

interface HotelBooking {
  name: string;
  location: string;
  checkIn: Date;
  checkOut: Date;
  roomType: string;
  guests: number;
  nights: number;
  price: number;
  status: 'Confirmed' | 'Cancelled' | 'Pending';
  image: string;
  rating: number;
  amenities: string[];
}

interface CabBooking {
  pickupLocation: string;
  dropLocation: string;
  date: Date;
  time: string;
  vehicleType: string;
  status: 'Confirmed' | 'Cancelled' | 'Pending';
  price: number;
  distance: string;
  duration: string;
  driver: {
    name: string;
    rating: number;
    phone: string;
    vehicleNumber: string;
  };
}

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
  // User Info
  public userName: string = 'Admin';
  public memberSince: Date = new Date('2024-01-01');
  public email: string = 'admin@example.com';
  public phoneNumber: string = '+1 234 567 8900';
  public totalBookings: number = 15;

  // Active Tab Management
  public activeTab: string = 'flights';

  // Mock Data
  public flightBookings: FlightBooking[] = [
    {
      from: 'New York (JFK)',
      to: 'London (LHR)',
      flightNumber: 'BA178',
      date: new Date('2024-03-25'),
      airline: 'British Airways',
      departureTime: '10:30 AM',
      arrivalTime: '10:30 PM',
      status: 'Confirmed',
      price: 850,
      passengers: 2
    },
    {
      from: 'London (LHR)',
      to: 'Paris (CDG)',
      flightNumber: 'AF1081',
      date: new Date('2024-04-15'),
      airline: 'Air France',
      departureTime: '2:15 PM',
      arrivalTime: '4:30 PM',
      status: 'Pending',
      price: 320,
      passengers: 1
    }
  ];

  public hotelBookings: HotelBooking[] = [
    {
      name: 'Grand Hyatt',
      location: 'Manhattan, New York',
      checkIn: new Date('2024-03-25'),
      checkOut: new Date('2024-03-30'),
      roomType: 'Deluxe Suite',
      guests: 2,
      nights: 5,
      price: 1200,
      status: 'Confirmed',
      image: 'assets/images/hotels/grand-hyatt.jpg',
      rating: 4.8,
      amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant']
    },
    {
      name: 'Ritz Carlton',
      location: 'Central London',
      checkIn: new Date('2024-04-15'),
      checkOut: new Date('2024-04-18'),
      roomType: 'Executive Room',
      guests: 1,
      nights: 3,
      price: 900,
      status: 'Confirmed',
      image: 'assets/images/hotels/ritz-carlton.jpg',
      rating: 4.9,
      amenities: ['WiFi', 'Spa', 'Restaurant', 'Gym']
    },
    {
      name: 'Burj Al Arab',
      location: 'Dubai, UAE',
      checkIn: new Date('2024-05-10'),
      checkOut: new Date('2024-05-15'),
      roomType: 'Royal Suite',
      guests: 2,
      nights: 5,
      price: 2500,
      status: 'Pending',
      image: 'assets/images/hotels/burj-al-arab.jpg',
      rating: 5.0,
      amenities: ['Butler Service', 'Private Pool', 'Helipad', 'Private Beach']
    },
    {
      name: 'Marina Bay Sands',
      location: 'Singapore',
      checkIn: new Date('2024-06-01'),
      checkOut: new Date('2024-06-05'),
      roomType: 'Club Room',
      guests: 2,
      nights: 4,
      price: 1500,
      status: 'Confirmed',
      image: 'assets/images/hotels/marina-bay-sands.jpg',
      rating: 4.7,
      amenities: ['Infinity Pool', 'Casino', 'Skybar', 'Luxury Shopping']
    },
    {
      name: 'Four Seasons',
      location: 'Paris, France',
      checkIn: new Date('2024-07-15'),
      checkOut: new Date('2024-07-20'),
      roomType: 'Premium Suite',
      guests: 2,
      nights: 5,
      price: 1800,
      status: 'Cancelled',
      image: 'assets/images/hotels/four-seasons-paris.jpg',
      rating: 4.9,
      amenities: ['Michelin Restaurant', 'Spa', 'City View', 'Concierge']
    }
  ];

  public cabBookings: CabBooking[] = [
    {
      pickupLocation: 'JFK International Airport',
      dropLocation: 'Grand Hyatt Hotel, Manhattan',
      date: new Date('2024-03-25'),
      time: '10:30 AM',
      vehicleType: 'Premium SUV',
      status: 'Confirmed',
      price: 75,
      distance: '18 miles',
      duration: '45 mins',
      driver: {
        name: 'John Smith',
        rating: 4.8,
        phone: '+1 234-567-8900',
        vehicleNumber: 'NYC 1234'
      }
    },
    {
      pickupLocation: 'LaGuardia Airport',
      dropLocation: 'Times Square',
      date: new Date('2024-04-01'),
      time: '2:15 PM',
      vehicleType: 'Sedan',
      status: 'Pending',
      price: 55,
      distance: '12 miles',
      duration: '35 mins',
      driver: {
        name: 'Mike Johnson',
        rating: 4.9,
        phone: '+1 234-567-8901',
        vehicleNumber: 'NYC 5678'
      }
    },
    {
      pickupLocation: 'Central Park',
      dropLocation: 'Brooklyn Bridge',
      date: new Date('2024-04-15'),
      time: '9:00 AM',
      vehicleType: 'Luxury Sedan',
      status: 'Confirmed',
      price: 65,
      distance: '8 miles',
      duration: '25 mins',
      driver: {
        name: 'Sarah Wilson',
        rating: 4.7,
        phone: '+1 234-567-8902',
        vehicleNumber: 'NYC 9012'
      }
    }
  ];

  public visaApplications = [
    {
      country: 'United States',
      type: 'Tourist Visa (B1/B2)',
      appliedDate: new Date('2024-02-15'),
      status: 'Processing',
      validityPeriod: '10 years',
      processingTime: '2-3 weeks',
      applicationNumber: 'USAV2024001',
      documents: ['Passport', 'Bank Statements', 'Travel Itinerary']
    }
  ];

  searchTerm: string = '';
  filterStatus: string = 'all';
  filterDate: string = '';
  filteredFlights: FlightBooking[] = [];

  // Pagination properties
  itemsPerPage: number = 15;
  currentPage: number = 1;
  
  get totalPages(): number {
    return Math.ceil(this.filteredFlights.length / this.itemsPerPage);
  }

  get paginatedFlights(): FlightBooking[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredFlights.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Add these properties
  hotelSearchTerm: string = '';
  hotelFilterStatus: string = 'all';
  hotelFilterDate: string = '';
  filteredHotels: HotelBooking[] = [];
  currentHotelPage: number = 1;
  itemsPerHotelPage: number = 15;

  get totalHotelPages(): number {
    return Math.ceil(this.filteredHotels.length / this.itemsPerHotelPage);
  }

  get paginatedHotels(): HotelBooking[] {
    const startIndex = (this.currentHotelPage - 1) * this.itemsPerHotelPage;
    const endIndex = startIndex + this.itemsPerHotelPage;
    return this.filteredHotels.slice(startIndex, endIndex);
  }

  get hotelPageNumbers(): number[] {
    return Array.from({ length: this.totalHotelPages }, (_, i) => i + 1);
  }

  changeHotelPage(page: number): void {
    this.currentHotelPage = page;
  }

  filterHotels(): void {
    this.filteredHotels = this.hotelBookings.filter(hotel => {
      const matchesSearch = !this.hotelSearchTerm || 
        hotel.name.toLowerCase().includes(this.hotelSearchTerm.toLowerCase()) ||
        hotel.location.toLowerCase().includes(this.hotelSearchTerm.toLowerCase());

      const matchesStatus = this.hotelFilterStatus === 'all' || 
        hotel.status.toLowerCase() === this.hotelFilterStatus.toLowerCase();

      const checkInDate = new Date(hotel.checkIn).toISOString().split('T')[0];
      const matchesDate = !this.hotelFilterDate || checkInDate === this.hotelFilterDate;

      return matchesSearch && matchesStatus && matchesDate;
    });
  }

  // Add cab properties
  cabSearchTerm: string = '';
  cabFilterStatus: string = 'all';
  cabFilterDate: string = '';
  filteredCabs: CabBooking[] = [];
  currentCabPage: number = 1;
  itemsPerCabPage: number = 15;

  get totalCabPages(): number {
    return Math.ceil(this.filteredCabs.length / this.itemsPerCabPage);
  }

  get paginatedCabs(): CabBooking[] {
    const startIndex = (this.currentCabPage - 1) * this.itemsPerCabPage;
    const endIndex = startIndex + this.itemsPerCabPage;
    return this.filteredCabs.slice(startIndex, endIndex);
  }

  get cabPageNumbers(): number[] {
    return Array.from({ length: this.totalCabPages }, (_, i) => i + 1);
  }

  changeCabPage(page: number): void {
    this.currentCabPage = page;
  }

  filterCabs(): void {
    this.filteredCabs = this.cabBookings.filter(cab => {
      const matchesSearch = !this.cabSearchTerm || 
        cab.pickupLocation.toLowerCase().includes(this.cabSearchTerm.toLowerCase()) ||
        cab.dropLocation.toLowerCase().includes(this.cabSearchTerm.toLowerCase()) ||
        cab.driver.name.toLowerCase().includes(this.cabSearchTerm.toLowerCase());

      const matchesStatus = this.cabFilterStatus === 'all' || 
        cab.status.toLowerCase() === this.cabFilterStatus.toLowerCase();

      const cabDate = new Date(cab.date).toISOString().split('T')[0];
      const matchesDate = !this.cabFilterDate || cabDate === this.cabFilterDate;

      return matchesSearch && matchesStatus && matchesDate;
    });
  }

  constructor() {
    this.calculateTotalBookings();
    this.filteredFlights = [...this.flightBookings];
    this.filteredHotels = [...this.hotelBookings];
    this.filteredCabs = [...this.cabBookings];
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  private calculateTotalBookings(): void {
    this.totalBookings = 
      this.flightBookings.length + 
      this.hotelBookings.length + 
      this.cabBookings.length;
  }

  getStatusClass(status: string): string {
    switch(status.toLowerCase()) {
      case 'confirmed': return 'bg-success';
      case 'pending': return 'bg-warning';
      case 'cancelled': return 'bg-danger';
      default: return 'bg-secondary';
    }
  }

  formatPrice(price: number): string {
    return `$${price.toLocaleString()}`;
  }

  calculateNights(checkIn: Date, checkOut: Date): number {
    return Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
  }

  getUpcomingFlights(): FlightBooking[] {
    return this.flightBookings.filter(flight => 
      new Date(flight.date) > new Date() && flight.status === 'Confirmed'
    );
  }

  getPendingBookings(): FlightBooking[] {
    return this.flightBookings.filter(flight => flight.status === 'Pending');
  }

  getCancelledBookings(): FlightBooking[] {
    return this.flightBookings.filter(flight => flight.status === 'Cancelled');
  }

  getTotalRevenue(): number {
    return this.flightBookings
      .filter(flight => flight.status === 'Confirmed')
      .reduce((total, flight) => total + flight.price, 0);
  }

  filterFlights(): void {
    this.filteredFlights = this.flightBookings.filter(flight => {
      const matchesSearch = !this.searchTerm || 
        flight.flightNumber.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        flight.from.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        flight.to.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        flight.airline.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesStatus = this.filterStatus === 'all' || 
        flight.status.toLowerCase() === this.filterStatus.toLowerCase();

      const flightDate = new Date(flight.date).toISOString().split('T')[0];
      const matchesDate = !this.filterDate || flightDate === this.filterDate;

      return matchesSearch && matchesStatus && matchesDate;
    });
  }

  showStatusBadge: boolean = true;

  showTemporaryBadge(status: string): void {
    this.showStatusBadge = false;
    setTimeout(() => {
      this.showStatusBadge = true;
    }, 300);
  }
}
