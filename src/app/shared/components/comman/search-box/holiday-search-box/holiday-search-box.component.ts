import { Component, HostListener, Input } from '@angular/core';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-holiday-search-box',
    templateUrl: './holiday-search-box.component.html',
    styleUrls: ['./holiday-search-box.component.scss'],
    standalone: true,
    imports: [NgClass, NgbInputDatepicker]
})
export class HolidaySearchBoxComponent {

  @Input() text: boolean;
  @Input() borderClass: boolean;
  @Input() searchFix: boolean;

  public searchFixed: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 400) {
      this.searchFixed = true;
    } else {
      this.searchFixed = false;
    }
  }
}
