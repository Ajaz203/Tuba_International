import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-restaurant-classic-our-restaurant',
    templateUrl: './restaurant-classic-our-restaurant.component.html',
    styleUrls: ['./restaurant-classic-our-restaurant.component.scss'],
    standalone: true,
    imports: [TitleComponent, RouterLink]
})
export class RestaurantClassicOurRestaurantComponent {

}
