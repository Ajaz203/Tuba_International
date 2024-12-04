import { Component, EventEmitter, Output } from '@angular/core';
import { CabService } from '../../../../../shared/services/cab.service';
import { GridService } from '../../../../../shared/services/grid.service';
import { FilterComponent } from '../../filter/filter.component';

@Component({
    selector: 'app-cab-grid-panel',
    templateUrl: './cab-grid-panel.component.html',
    styleUrl: './cab-grid-panel.component.scss',
    standalone: true,
    imports: [FilterComponent]
})
export class CabGridPanelComponent {

  @Output() selectedTabValue = new EventEmitter<string>();

  public listView: boolean = false;
  public col_sm_6: boolean = false;
  public col_xl_4: boolean = false;
  public col_xl_3: boolean = false;
  public col_lg_4: boolean = false;
  public col_12: boolean = false;
  public activeTab: string = 'all';
  public isOpenTab: boolean = false;

  constructor(private cabService: CabService, private gridService: GridService){}

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

  openHorizontalFilter(){
    this.cabService.isOpenHorizontalFilter =! this.cabService.isOpenHorizontalFilter;
  }

  openResponsiveTab(){
    this.isOpenTab =! this.isOpenTab;
  }

  changedValue(value: string){
    this.activeTab = value;
    this.selectedTabValue.emit(value);
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
