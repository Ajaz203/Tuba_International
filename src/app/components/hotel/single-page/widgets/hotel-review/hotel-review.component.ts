import { Component, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { hotelReview } from '../../../../../shared/interface/hotel';
import { BarRatingModule } from 'ngx-bar-rating';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-hotel-review',
    templateUrl: './hotel-review.component.html',
    styleUrls: ['./hotel-review.component.scss'],
    standalone: true,
    imports: [NgClass, BarRatingModule]
})
export class HotelReviewComponent {

  @Input() hotelReview: hotelReview[];
  @Input() type: string;

  constructor(private config: NgbRatingConfig) {
		this.config.max = 5;
		this.config.readonly = true;
	}
}
