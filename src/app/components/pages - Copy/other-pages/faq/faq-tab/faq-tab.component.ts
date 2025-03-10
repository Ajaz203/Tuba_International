import { Component, EventEmitter, Input, Output } from '@angular/core';
import { tabs } from '../../../../../shared/interface/pages';

@Component({
    selector: 'app-faq-tab',
    templateUrl: './faq-tab.component.html',
    styleUrl: './faq-tab.component.scss',
    standalone: true
})
export class FaqTabComponent {

  @Input() tabs: tabs[];

  @Output() tabValue = new EventEmitter<string>();

  public activeTab = 'general';

  changeTab(value: string){
    this.activeTab = value;
    this.tabValue.emit(this.activeTab)
  }
}
