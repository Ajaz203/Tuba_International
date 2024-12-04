import { Component, Input } from '@angular/core';
import { restaurantBanner } from '../../../../../shared/interface/restaurant-minimal';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-restaurant-minimal-banner',
    templateUrl: './restaurant-minimal-banner.component.html',
    styleUrls: ['./restaurant-minimal-banner.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class RestaurantMinimalBannerComponent {

  @Input() banner: restaurantBanner[];

}
