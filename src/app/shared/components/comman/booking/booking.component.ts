import { Component, Input } from '@angular/core';
import { hotelDetails } from '../../../../shared/interface/hotel';
import { HotelService } from '../../../../shared/services/hotel.service';
import { BookingMyWalletComponent } from './booking-my-wallet/booking-my-wallet.component';
import { BookingNetBankingComponent } from './booking-net-banking/booking-net-banking.component';
import { BookingCreditCardComponent } from './booking-credit-card/booking-credit-card.component';
import { BookingDebitCardComponent } from './booking-debit-card/booking-debit-card.component';
import { NgbAccordionDirective, NgbAccordionItem, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-booking',
    templateUrl: './booking.component.html',
    styleUrls: ['./booking.component.scss'],
    standalone: true,
    imports: [NgbAccordionDirective, NgbAccordionItem, NgbAccordionToggle, NgbAccordionButton, NgbCollapse, NgbAccordionCollapse, NgbAccordionBody, BookingDebitCardComponent, BookingCreditCardComponent, BookingNetBankingComponent, BookingMyWalletComponent]
})
export class BookingComponent {

  @Input() flight: boolean = false;
  @Input() title: boolean = false;

  public hotelDetails: hotelDetails;

  constructor(private hotelService: HotelService) {
    this.hotelService.hotelDetails().subscribe(response => {
      this.hotelDetails = response;
    })
  }
}
