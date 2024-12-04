import { Component } from '@angular/core';
import { netBankingDetails } from '../../../data/data/booking';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-booking-net-banking',
    templateUrl: './booking-net-banking.component.html',
    styleUrls: ['./booking-net-banking.component.scss'],
    standalone: true,
    imports: [FormsModule]
})
export class BookingNetBankingComponent {

  public netBankingDetails = netBankingDetails;

}
