import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';

@Component({
    selector: 'app-cab-classic-home-section',
    templateUrl: './cab-classic-home-section.component.html',
    styleUrls: ['./cab-classic-home-section.component.scss'],
    standalone: true,
    imports: [OwlDateTimeModule,OwlNativeDateTimeModule, NgClass, RouterLink]
})
export class CabClassicHomeSectionComponent {

  public selectedValue: string;

  sameLocation(event: Event){
    this.selectedValue = (event.target as HTMLInputElement).value;
  }
}
