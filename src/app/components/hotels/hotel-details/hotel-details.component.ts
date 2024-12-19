import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html'
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
    if (!this.hotelDetails) {
      // Fetch hotel details using id if data not passed through state
    }
  }
} 