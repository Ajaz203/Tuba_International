import { Component, HostListener, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
@Component({
    selector: 'app-food-search-box',
    templateUrl: './food-search-box.component.html',
    styleUrls: ['./food-search-box.component.scss'],
    standalone: true,
    imports: [NgClass]
})
export class FoodSearchBoxComponent {

  @Input() text: boolean;
  @Input() borderClass: boolean;
  @Input() searchFix: boolean;

  public searchFixed: boolean = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 400) {
      this.searchFixed = true;
    } else {
      this.searchFixed = false;
    }
  }
  navigateToVisaBooking() {
    this.router.navigate(['/apply-visa']);
  }
}
