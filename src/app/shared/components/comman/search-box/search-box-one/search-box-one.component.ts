import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-search-box-one',
    templateUrl: './search-box-one.component.html',
    styleUrls: ['./search-box-one.component.scss'],
    standalone: true,
    imports: [NgClass, NgbInputDatepicker, RouterLink]
})
export class SearchBoxOneComponent {

  @Input() text: boolean = false;
  @Input() borderClass: boolean = false;
  @Input() searchFix: boolean = false;
  @Input() shadow: boolean;

  public searchFixed: boolean = false;
  public guest: number = 1;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = window.pageYOffset || 0;
    if (number > 400) {
      this.searchFixed = true;
    } else {
      this.searchFixed = false;
    }
  }
  
  changeValue(value:number){
    if(value == 1){
      this.guest += 1;
    }else if(value == -1){
      if(this.guest > 1){
        this.guest -= 1;
      }
    }
  }
}
