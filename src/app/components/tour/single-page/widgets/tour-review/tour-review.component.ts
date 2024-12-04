import { Component, Input } from '@angular/core';
import { BarRatingModule } from 'ngx-bar-rating';
import { hotelReview } from '../../../../../shared/interface/hotel';

@Component({
    selector: 'app-tour-review',
    templateUrl: './tour-review.component.html',
    styleUrl: './tour-review.component.scss',
    standalone: true,
    imports: [BarRatingModule]
})

export class TourReviewComponent {

  @Input() review: hotelReview[];

  
}
