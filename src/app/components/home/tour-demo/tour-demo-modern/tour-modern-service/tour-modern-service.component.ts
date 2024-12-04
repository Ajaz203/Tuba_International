import { Component, Input } from '@angular/core';
import { service } from '../../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { ServicesComponent } from '../../../../../shared/components/comman/services/services.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-tour-modern-service',
    templateUrl: './tour-modern-service.component.html',
    styleUrls: ['./tour-modern-service.component.scss'],
    standalone: true,
    imports: [TitleComponent, ServicesComponent]
})
export class TourModernServiceComponent {

  @Input() id: number[];

  public description = "Trips, experiences, and places. All in one service.";

  public services:service[];

  constructor(private hotelService: HotelService){
    this.hotelService.services().subscribe(response => {
      this.services = response.services;

      if (Array.isArray(this.id)) {
       this.services = this.services?.filter((item) => {
         return this.id.includes(item.id)
       })
     }
    })
  }
}
