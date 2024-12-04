import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchTabComponent } from './widgets/search-tab/search-tab.component';
import { ProfileComponent } from './widgets/profile/profile.component';
// import { LanguageComponent } from './widgets/language/language.component';
// import { CurrencyComponent } from './widgets/currency/currency.component';
import { MenuComponent } from '../menu/menu.component';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [NgClass, MenuComponent, ProfileComponent, SearchTabComponent]
})
export class HeaderComponent {

  @Input() headerClass: string;
  @Input() couponCode: boolean = false;
  @Input() setting: boolean = true;
  @Input() containerFluid: boolean = false;
  @Input() userClass: string = 'user-light';
  @Input() searchTab: boolean = false;

  @Output() searchBoxType = new EventEmitter<string>();

  public isOpen: boolean = false;
  public logo: string = '/assets/imges2/tuba-.png';

  openMenu(){
    this.isOpen =! this.isOpen;
  }

  getValue(value: string){
    this.searchBoxType.emit(value)
  }
}
