import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridService } from '../../../../../shared/services/grid.service';
import { RestaurantService } from '../../../../../shared/services/restaurant.service';
import { GoogleMapModalComponent } from '../../modal/google-map-modal/google-map-modal.component';
import { LeafletMapModalComponent } from '../../modal/leaflet-map-modal/leaflet-map-modal.component';
import { FilterComponent } from '../../filter/filter.component';

@Component({
    selector: 'app-restaurant-grid-panel',
    templateUrl: './restaurant-grid-panel.component.html',
    styleUrl: './restaurant-grid-panel.component.scss',
    standalone: true,
    imports: [FilterComponent]
})
export class RestaurantGridPanelComponent {

  @Input() horizontalFilter: boolean = false;
  @Input() gridOptions: boolean;
  @Input() mapFilter: boolean;
  @Input() mapModal: boolean;
  @Input() mapType: string;
  @Input() onClickMap: boolean = false;
  @Input() grid: boolean;

  @Output() selectedTabValue = new EventEmitter<string>();
  @Output() map = new EventEmitter<boolean>();

  public listView: boolean = false;
  public col_sm_6: boolean = false;
  public col_xl_4: boolean = false;
  public col_xl_3: boolean = false;
  public col_lg_4: boolean = false;
  public col_12: boolean = false;
  public activeTab: string = 'all';
  public isOpenTab: boolean = false;
  public isOpenMap: boolean = false;

  constructor(
    private restaurantService: RestaurantService,
    private gridService: GridService,
    private modal: NgbModal){}

  ngOnInit(){
    this.selectedTabValue.emit('all');
  }

  grid2(){
    this.gridService.grid2();
  }

  grid3(){
    this.gridService.grid3();
  }

  grid4(){
    this.gridService.grid4();
  }

  changedValue(value: string){
    this.activeTab = value;
    this.selectedTabValue.emit(value);
  }

  openHorizontalFilter(){
    this.restaurantService.isOpenHorizontalFilter =! this.restaurantService.isOpenHorizontalFilter;
  }

  openResponsiveTab(){
    this.isOpenTab =! this.isOpenTab;
  }

  openMapFilter(){
    this.restaurantService.isOpenMapFilter =! this.restaurantService.isOpenMapFilter;
  }

  openMap(){
    this.isOpenMap =! this.isOpenMap;
    this.map.emit(this.isOpenMap)
  }

  openMapModal(mapType: string){
    if(mapType == 'googleMap'){
      const modal = this.modal.open(GoogleMapModalComponent, { size: 'xl', centered: true, modalDialogClass:'xxl-custom'})
      modal.componentInstance.filterType = 'restaurant';
    }else if(mapType == 'leafletMap'){
      const modal = this.modal.open(LeafletMapModalComponent, { size: 'xl',centered: true, modalDialogClass:'xxl-custom'});
      modal.componentInstance.filterType = 'restaurant';
    }
  }

  ngDoCheck(){
    this.listView = this.gridService.listView;
    this.col_sm_6 = this.gridService.col_sm_6;
    this.col_xl_4 = this.gridService.col_xl_4;
    this.col_xl_3 = this.gridService.col_xl_3;
    this.col_lg_4 = this.gridService.col_lg_4;
    this.col_12 = this.gridService.col_12;
  }
}
