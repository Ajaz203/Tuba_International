import { Component, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { category } from '../../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-flight-modern-airline-ticket',
    templateUrl: './flight-modern-airline-ticket.component.html',
    styleUrls: ['./flight-modern-airline-ticket.component.scss'],
    standalone: true,
    imports: [TitleComponent, CarouselModule, RouterLink, CurrencySymbolPipe]
})
export class FlightModernAirlineTicketComponent {

  @Input() id: number[];
  @Input() flightDetails: category[];

  public description = "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been standard.......";

  public options = {
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

  constructor(private config: NgbRatingConfig, public hotelService: HotelService) {
		this.config.max = 5;
		this.config.readonly = true;
	}

  ngOnChanges(){
    if(Array.isArray(this.id)){
      this.flightDetails = this.flightDetails?.filter((data) => {
        return this.id.includes(data.id)
      })
    }
  }
}
