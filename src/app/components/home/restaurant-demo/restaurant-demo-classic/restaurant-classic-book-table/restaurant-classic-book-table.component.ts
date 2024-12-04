import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-restaurant-classic-book-table',
    templateUrl: './restaurant-classic-book-table.component.html',
    styleUrls: ['./restaurant-classic-book-table.component.scss'],
    standalone: true,
    imports: [TitleComponent, NgbInputDatepicker, RouterLink]
})
export class RestaurantClassicBookTableComponent {

}
