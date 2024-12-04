import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tabs } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-user-dashboard-tab',
    templateUrl: './user-dashboard-tab.component.html',
    styleUrl: './user-dashboard-tab.component.scss',
    standalone: true
})
export class UserDashboardTabComponent {

  @Input() tabs: tabs[];

  @Output() tabValue = new EventEmitter<string>();

  public activeTab = 'dashboard';

  changeTab(value: string){
    this.activeTab = value;
    this.tabValue.emit(this.activeTab)
  }
}
