import { Component } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@Component({
    selector: 'app-restaurant-book-table',
    templateUrl: './restaurant-book-table.component.html',
    styleUrl: './restaurant-book-table.component.scss',
    standalone: true,
    imports: [OwlDateTimeModule,OwlNativeDateTimeModule]
})
export class RestaurantBookTableComponent {

}
