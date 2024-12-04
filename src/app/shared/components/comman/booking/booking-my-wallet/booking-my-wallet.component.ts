import { Component } from '@angular/core';
import { walletDetails } from '../../../data/data/booking';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-booking-my-wallet',
    templateUrl: './booking-my-wallet.component.html',
    styleUrls: ['./booking-my-wallet.component.scss'],
    standalone: true,
    imports: [FormsModule]
})
export class BookingMyWalletComponent {

  public walletDetails = walletDetails;

}
