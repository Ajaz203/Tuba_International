import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';

@Component({
  selector: 'app-hotel-details',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <div class="container mt-4">
      <div class="card">
        <div class="card-body">
          <h2>{{ hotelDetails?.name || 'Hotel Details' }}</h2>
          <!-- Add more hotel details here -->
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  `
})
export class HotelDetailsComponent implements OnInit {
  hotelDetails: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.hotelDetails = navigation?.extras?.state?.['hotelData'];
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (!this.hotelDetails && id) {
      // Fetch hotel details using id if data not passed through state
      console.log('Fetching hotel details for ID:', id);
    }
  }
} 