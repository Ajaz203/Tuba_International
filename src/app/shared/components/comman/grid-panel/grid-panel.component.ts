import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestaurantGridPanelComponent } from './restaurant-grid-panel/restaurant-grid-panel.component';
import { CabGridPanelComponent } from './cab-grid-panel/cab-grid-panel.component';
import { TourGridPanelComponent } from './tour-grid-panel/tour-grid-panel.component';
import { HotelGridPanelComponent } from './hotel-grid-panel/hotel-grid-panel.component';

@Component({
    selector: 'app-grid-panel',
    templateUrl: './grid-panel.component.html',
    styleUrls: ['./grid-panel.component.scss'],
    standalone: true,
    imports: [HotelGridPanelComponent, TourGridPanelComponent, CabGridPanelComponent, RestaurantGridPanelComponent]
})
export class GridPanelComponent {

  @Input() type: string;
  @Input() grid4Option: boolean = true;
  @Input() horizontalFilter: boolean = false;
  @Input() gridOptions: boolean = true
  @Input() mapFilter: boolean = false;
  @Input() mapModal: boolean = false;
  @Input() mapType: string;
  @Input() onClickMap: boolean = false;
  @Input() grid: boolean = true;
  @Input() tourHorizontalFilter: boolean = false;
  @Input() filterClass: boolean;

  @Output() selectedTabValue = new EventEmitter<string>();
  @Output() map = new EventEmitter<boolean>();

  public isOpenMap: boolean = false;

  constructor() {}

  ngOnInit(){
    this.selectedTabValue.emit('all');
  }

  getTabValue(value: string){
    this.selectedTabValue.emit(value);
  }

  openMap(value: boolean){
    this.isOpenMap = value;
    this.map.emit(this.isOpenMap)
  }
}
