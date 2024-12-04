import { Component, Input } from '@angular/core';
import { specialRoom } from '../../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';
import { AnimationComponent } from '../../../../../shared/components/comman/animation/animation.component';

@Component({
    selector: 'app-hotel-classic-special-rooms',
    templateUrl: './hotel-classic-special-rooms.component.html',
    styleUrls: ['./hotel-classic-special-rooms.component.scss'],
    standalone: true,
    imports: [AnimationComponent, TitleComponent, CarouselModule, RouterLink, CurrencySymbolPipe]
})
export class HotelClassicSpecialRoomsComponent {

  @Input() id: number[];
  @Input() specialRooms: specialRoom[];

  public Options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      668: {
        items: 2
      },
      999: {
        items: 3
      }
    },
  };

  constructor(public hotelService: HotelService){}

  ngOnChanges(){
     if (Array.isArray(this.id)) {
      this.specialRooms = this.specialRooms?.filter((item) => {
        return this.id.includes(item.id)
      })
    }
  }
}
