import { Component, Input } from '@angular/core';
import { cabDetails } from '../../../../../shared/interface/cab-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-cab-modern-booking-deals',
    templateUrl: './cab-modern-booking-deals.component.html',
    styleUrls: ['./cab-modern-booking-deals.component.scss'],
    standalone: true,
    imports: [TitleComponent, CarouselModule, CurrencySymbolPipe]
})
export class CabModernBookingDealsComponent {

  @Input() id: number[];
  @Input() cab: cabDetails[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 80,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      767: {
        items: 3,
      },
      999: {
        items: 3,
      },
      1199: {
        items: 3,
      },
    }
  }

  constructor(public hotelService: HotelService){}

  ngOnChanges(){
    if(Array.isArray(this.id)){
      this.cab = this.cab.filter((item) => {
        return this.id.includes(item.id)
      })
    }
  }
}
