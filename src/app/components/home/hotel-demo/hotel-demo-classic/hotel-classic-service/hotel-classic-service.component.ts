import { Component, Input } from '@angular/core';
import { service } from '../../../../../shared/interface/hotel-classic';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { ServicesComponent } from '../../../../../shared/components/comman/services/services.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';
import { AnimationComponent } from '../../../../../shared/components/comman/animation/animation.component';

@Component({
    selector: 'app-hotel-classic-service',
    templateUrl: './hotel-classic-service.component.html',
    styleUrls: ['./hotel-classic-service.component.scss'],
    standalone: true,
    imports: [AnimationComponent, TitleComponent, ServicesComponent]
})
export class HotelClassicServiceComponent {

  @Input() id: number[] = [];

  public services: service[];

  constructor(private hotelService: HotelService){}

  ngOnInit(){
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
