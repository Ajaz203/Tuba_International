import { Component, HostListener } from '@angular/core';
import { SearchBoxComponent } from '../../../../../shared/components/comman/search-box/search-box.component';

@Component({
    selector: 'app-tour-trending-home-section',
    templateUrl: './tour-trending-home-section.component.html',
    styleUrls: ['./tour-trending-home-section.component.scss'],
    standalone: true,
    imports: [SearchBoxComponent]
})
export class TourTrendingHomeSectionComponent {

  public top: number = 14;
  public previousScrollY: number = 0;
  public bg_size = 100;
  public font_size= 580;

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
    this.top = this.top + 1;
    this.bg_size = this.bg_size + 1;
    this.font_size = this.font_size - 4;
  }

  onScrollUp(): void {
    if(window.scrollY == 0){
      this.top = 14;
      this.font_size = 580;
      this.bg_size = 100
    }else{
      this.top = this.top - 1;
      this.font_size = this.font_size +  4;
    }
  }
}
