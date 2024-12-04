import { Component } from '@angular/core';
import { HotelService } from '../../../../../../shared/services/hotel.service';
import { hotels } from '../../../../../../shared/components/data/data/filter/hotel';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CurrencySymbolPipe } from '../../../../../pipe/currency.pipe';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.component.html',
    styleUrls: ['./hotels.component.scss'],
    standalone: true,
    imports: [NgStyle, NgbRating, CurrencySymbolPipe]
})
export class HotelsComponent {

  public hotels = hotels;
  public isOpenHotels: boolean = true;

  constructor(public hotelService: HotelService,private config: NgbRatingConfig){
    this.config.max = 5;
		this.config.readonly = true;
  }

  openHotels(){
    this.isOpenHotels =! this.isOpenHotels;
  }
}
