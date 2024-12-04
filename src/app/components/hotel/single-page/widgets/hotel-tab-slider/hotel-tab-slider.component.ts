import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { hotelTabs } from '../../../../../shared/components/data/data/filter/hotel';

@Component({
    selector: 'app-hotel-tab-slider',
    templateUrl: './hotel-tab-slider.component.html',
    styleUrls: ['./hotel-tab-slider.component.scss'],
    standalone: true
})
export class HotelTabSliderComponent {

  @Input() type: string;
  @Output() tabValue = new EventEmitter<string>();

   public tabs = hotelTabs;
   public activeTab = 'about';

   @HostListener('window: scroll', [])
   onWindowScroll(){
    let number = window.pageYOffset || 0;
    if(this.type == 'slider'){
      if(number < 1510){
        this.activeTab = 'about';
      }if (number >= 1520) {
        this.activeTab = 'rooms';
      } if(number >= 2300){
        this.activeTab = 'facility'
      } if(number >= 2640){
        this.activeTab = 'location'
      } if(number >= 3200){
        this.activeTab = 'reviews'
      } if(number >= 3775){
        this.activeTab = 'policy'
      }
    }
   }

   changeTab(value: string){
    this.activeTab = value;

    this.tabValue.emit(this.activeTab)
   }

   setPage(value: string) {
    document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' });
    this.activeTab = value;
  }
}
