import { Component, Input } from '@angular/core';
import { restaurantOverview } from '../../../../../shared/interface/restaurant';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-restaurant-overview',
    templateUrl: './restaurant-overview.component.html',
    styleUrl: './restaurant-overview.component.scss',
    standalone: true,
    imports: [NgClass]
})
export class RestaurantOverviewComponent {

  @Input() restaurantOverview: restaurantOverview[];

}
