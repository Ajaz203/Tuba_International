import { NgModule } from '@angular/core';
import { FlightBookingSummaryComponent } from './components/flight-booking-summary/flight-booking-summary.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FlightSearchBoxTwoComponent } from './shared/components/comman/search-box/flight-search-box-two/flight-search-box-two.component';
import { ContactFormComponent } from './components/pages/other-pages/contact-us-1/contact-form/contact-form.component';
@NgModule({
  declarations: [
    
  
  ],
  imports: [
    // ...
    FlightSearchBoxTwoComponent,
    FlightBookingSummaryComponent,
    ReactiveFormsModule,FormsModule
  ],
  // ...
})
export class AppModule { } 