import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GridService } from '../../../../../shared/services/grid.service';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { GoogleMapModalComponent } from '../../modal/google-map-modal/google-map-modal.component';
import { LeafletMapModalComponent } from '../../modal/leaflet-map-modal/leaflet-map-modal.component';
import { FilterComponent } from '../../filter/filter.component';

@Component({
    selector: 'app-hotel-grid-panel',
    templateUrl: './hotel-grid-panel.component.html',
    styleUrls: ['./hotel-grid-panel.component.scss'],
    standalone: true,
    imports: [FilterComponent]
})
export class HotelGridPanelComponent {

  @Input() grid4Option: boolean = true;
  @Input() horizontalFilter: boolean = false;
  @Input() gridOptions: boolean = true
  @Input() mapFilter: boolean = false;
  @Input() mapModal: boolean = false;
  @Input() mapType: string;
  @Input() onClickMap: boolean = false;
  @Input() grid: boolean = true;

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
  public isOpenFilter: boolean = false;
  public isOpenMap: boolean = false;

  constructor(
    private gridService: GridService,
    private hotelService: HotelService,
    private modal: NgbModal){
  }

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

  openResponsiveTab(){
    this.isOpenTab =! this.isOpenTab;
  }

  openHorizontalFilter(){
    if(window.innerWidth > 992){
      this.hotelService.isOpenHorizontalFilter =! this.hotelService.isOpenHorizontalFilter;
    }

    if(window.innerWidth < 992){
      this.hotelService.isOpenResponsiveHorizontal = true;
    }
  }

  openMapFilter(){
    this.hotelService.isOpenMapFilter =! this.hotelService.isOpenMapFilter;
  }

  openMapModal(mapType: string){
    if(mapType == 'googleMap'){
      const modal = this.modal.open(GoogleMapModalComponent, { size: 'xl', centered: true, modalDialogClass:'xxl-custom'});
      modal.componentInstance.filterType = 'hotel';
    }else if(mapType == 'leafletMap'){
      const modal = this.modal.open(LeafletMapModalComponent, { size: 'xl',centered: true, modalDialogClass:'xxl-custom'});
      modal.componentInstance.filterType = 'hotel';
    }
  }

  openMap(){
    this.isOpenMap =! this.isOpenMap;
    this.map.emit(this.isOpenMap)
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
