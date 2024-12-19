import { Component, HostListener, Input } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cab-search-box',
    templateUrl: './cab-search-box.component.html',
    styleUrls: ['./cab-search-box.component.scss'],
    standalone: true,
    imports: [NgClass, OwlDateTimeModule,OwlNativeDateTimeModule]
})
export class CabSearchBoxComponent {

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

  constructor(private router: Router) {}

  navigateToCabBooking() {
    this.router.navigate(['/cab/booking/booking']);
  }
}
