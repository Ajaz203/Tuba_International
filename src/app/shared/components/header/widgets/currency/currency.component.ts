import { Component } from '@angular/core';
import { currency } from '../../../../../shared/interface/hotel';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html',
    styleUrls: ['./currency.component.scss'],
    standalone: true,
    imports: [FormsModule]
})
export class CurrencyComponent {

  public currencies = [
    {
      name: 'Rupees',
      currency: 'INR',
      value: "inr",
      symbol: "₹",
      price: 83.22 // price of inr
    },
    {
      name: 'Dollar',
      currency: 'USD',
      value: "usd",
      symbol: "$",
      price: 1 // price of usd
    },
    {
      name: 'Euro',
      currency: 'EUR',
      value: "eur",
      symbol: "€",
      price: 0.95 // price of euro
    },
   
    {
      name: 'Australian Dollar',
      currency: 'AUD',
      value: "aud",
      symbol: "A$",
      price: 0.018 // price of euro
    },
  ]

  constructor(private hotelService: HotelService){}

  getCurrency(event: Event){
    if(event){
      this.hotelService.currency = (event.target as HTMLInputElement).value;
      localStorage.setItem('currency' , (event.target as HTMLInputElement).value)
    }
  }
}
