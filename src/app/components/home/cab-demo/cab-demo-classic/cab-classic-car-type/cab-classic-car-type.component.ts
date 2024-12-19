import { Component, Input } from '@angular/core';
import { carTypes } from '../../../../../shared/interface/cab-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
  selector: 'app-cab-classic-car-type',
  templateUrl: './cab-classic-car-type.component.html',
  styleUrls: ['./cab-classic-car-type.component.scss'],
  standalone: true,
  imports: [TitleComponent, CarouselModule, CurrencySymbolPipe]
})
export class CabClassicCarTypeComponent {

  @Input() carTypes: carTypes[];

  public description = "Experience comfort, style, and reliability with our diverse fleet of vehicles. From sleek sedans to spacious SUVs, each ride is tailored to meet your needs. Whether you're traveling solo or with a group, our fleet ensures every journey is smooth and enjoyable. Choose Tuba for an unforgettable ride every time!.";

  public options = {
  loop: true,
  nav: true,
  dots: false,
  center: true,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>",],
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

constructor(public hotelService: HotelService){ }

}
