import { Component, Input } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { hotelReview } from '../../../../../shared/interface/hotel';

@Component({
    selector: 'app-restaurant-review',
    templateUrl: './restaurant-review.component.html',
    styleUrl: './restaurant-review.component.scss',
    standalone: true,
    imports: [NgbRating]
})
export class RestaurantReviewComponent {

  @Input() restaurantReview: hotelReview[];

  constructor(private config: NgbRatingConfig) {
		this.config.max = 5;
		this.config.readonly = true;
	}
}
