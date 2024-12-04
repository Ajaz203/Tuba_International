import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { tourTab } from '../../../../../shared/components/data/data/filter/tour';

@Component({
    selector: 'app-tour-tabs',
    templateUrl: './tour-tabs.component.html',
    styleUrl: './tour-tabs.component.scss',
    standalone: true
})
export class TourTabsComponent {

  @Input() type: string;

  @Output() tabValue = new EventEmitter<string>();

  public tourTab = tourTab;
  public activeTab = "highlight";

  @HostListener('window: scroll', [])
   onWindowScroll(){
    let number = window.pageYOffset || 0;
    if(this.type == 'slider'){
      if(number < 1430){
        this.activeTab = 'highlight';
      }if (number >= 1680) {
        this.activeTab = 'itinerary';
      } if(number >= 2600){
        this.activeTab = 'gallery'
      } if(number >= 3175){
        this.activeTab = 'accommodations'
      } if(number >= 3980){
        this.activeTab = 'location'
      } if(number >= 4525){
        this.activeTab = 'reviews'
      } if(number >= 5075){
        this.activeTab = 'policy'
      }
    }
   }

  getTabValue(value: string){
    this.activeTab = value;

    this.tabValue.emit(this.activeTab)
  }

  setPage(value: string) {
    document.getElementById(value)?.scrollIntoView({ behavior: 'smooth' });
    this.activeTab = value;
  }

}
