import { Component } from '@angular/core';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-box-two',
    templateUrl: './search-box-two.component.html',
    styleUrls: ['./search-box-two.component.scss'],
    standalone: true,
    imports: [FormsModule, NgbInputDatepicker]
})
export class SearchBoxTwoComponent {

}
