import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-box-three',
    templateUrl: './search-box-three.component.html',
    styleUrls: ['./search-box-three.component.scss'],
    standalone: true,
    imports: [FormsModule, NgbInputDatepicker, RouterLink]
})
export class SearchBoxThreeComponent {

}
