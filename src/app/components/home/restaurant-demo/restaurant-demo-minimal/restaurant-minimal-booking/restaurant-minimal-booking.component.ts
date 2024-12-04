import { Component, HostListener, Input } from '@angular/core';
import { booking } from '../../../../../shared/interface/hotel-vector';

@Component({
    selector: 'app-restaurant-minimal-booking',
    templateUrl: './restaurant-minimal-booking.component.html',
    styleUrls: ['./restaurant-minimal-booking.component.scss'],
    standalone: true
})
export class RestaurantMinimalBookingComponent {

  @Input() booking: booking[];

  public top1: number = -30;
  public top2: number = 10;
  public top3: number = -10;
  public top4: number = -35;
  public rotate1: number = 0;
  public rotate2: number = 0;
  public rotate3: number = 0;
  public previousScrollY: number = 0;

  @HostListener('window:scroll', [])
  onWindowScroll(event: Event): void {
    const currentScrollY = window.scrollY;

    if (currentScrollY > this.previousScrollY) {
      // Scrolling down
      this.onScrollDown();
    } else if (currentScrollY < this.previousScrollY) {
      // Scrolling up
      this.onScrollUp();
    }

    this.previousScrollY = currentScrollY;
  }

  onScrollDown(): void {
    this.top1 = this.top1 + 0.75;
    this.rotate1 = this.rotate1 + 0.14;

    this.top2 = this.top2 + 0.75;
    this.rotate2 = this.rotate2 + 0.14;

    this.top3 = this.top3 + 0.75;
    this.rotate3 = this.rotate3 + 0.14;

    this.top4 = this.top4 + 0.75;
  }

  onScrollUp(): void {
    if(window.scrollY == 0){
      this.top1 = -30;
      this.rotate1 = 0;

      this.top2 = 10;
      this.rotate2 = 0;

      this.top3 = -10;
      this.rotate3 = 0;

      this.top4 = -35;

    }
    else{
      this.top1 = this.top1 - 0.75;
      this.rotate1 = this.rotate1 - 0.14;

      this.top2 = this.top2 - 0.75;
      this.rotate2 = this.rotate2 - 0.14;

      this.top3 = this.top3 - 0.75;
      this.rotate3 = this.rotate3 - 0.14;

      this.top4 = this.top4 - 0.75;

    }
  }
}
