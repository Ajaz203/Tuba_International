import { Component, ViewEncapsulation } from '@angular/core';
import { CalendarView, CalendarCommonModule, CalendarMonthModule } from 'angular-calendar';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-date-calender',
    templateUrl: './date-calender.component.html',
    styleUrl: './date-calender.component.scss',
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [NgStyle, CalendarCommonModule, CalendarMonthModule]
})
export class DateCalenderComponent {

  public isOpenCalender: boolean = false;
  public view: CalendarView = CalendarView.Month;
  public viewDate: Date = new Date();
  public activeDayIsOpen: boolean = true;

  openCalender(){
    this.isOpenCalender =! this.isOpenCalender
  }

  clickOutside(){
    this.isOpenCalender = false;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
