import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@Component({
    selector: 'app-cab-search',
    templateUrl: './cab-search.component.html',
    styleUrl: './cab-search.component.scss',
    standalone: true,
    imports: [OwlDateTimeModule,OwlNativeDateTimeModule, RouterLink]
})
export class CabSearchComponent {

  public isShow: boolean = false;

  openSearchBox(){
    this.isShow = true;
  }

  closeSearchBox(){
    this.isShow = false;
  }
}
