import { Component } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-cab-single-page-filter',
    templateUrl: './cab-single-page-filter.component.html',
    styleUrl: './cab-single-page-filter.component.scss',
    standalone: true,
    imports: [NgbInputDatepicker, OwlDateTimeModule,OwlNativeDateTimeModule]
})

export class CabSinglePageFilterComponent {
  
}
