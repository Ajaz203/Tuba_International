import { Component } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { hotels } from '../../../../../shared/interface/hotel';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-single-page-hotels',
    templateUrl: './single-page-hotels.component.html',
    styleUrls: ['./single-page-hotels.component.scss'],
    standalone: true,
    imports: [CarouselModule, RouterLink, NgbRating, CurrencySymbolPipe]
})
export class SinglePageHotelsComponent {

  public hotelDetails: hotels[];
  public hotels: hotels[];

  public options: OwlOptions = {
    loop: true,
    nav: false,
    dots: false,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      668: {
        items: 2
      },
      999: {
        items: 3
      }
    }
  }

  constructor(
    public hotelService: HotelService,
    private config: NgbRatingConfig,
    ){
    this.config.max = 5;
		this.config.readonly = true;

    this.hotelService.hotel().subscribe(response => {
      this.hotelDetails = response.hotels;

      if(this.hotelDetails){
        this.hotels = this.hotelDetails.filter((data) => {
            return data;
        })
      }
    })
  }
}
