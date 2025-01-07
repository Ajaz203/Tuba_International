import { NgModule } from '@angular/core';
import { FlightBookingSummaryComponent } from './components/flight-booking-summary/flight-booking-summary.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    FlightBookingSummaryComponent,
    ReactiveFormsModule
  ],
  // ...
})
export class AppModule { } 