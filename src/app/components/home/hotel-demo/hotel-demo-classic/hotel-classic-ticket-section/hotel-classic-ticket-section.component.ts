import { Component, Input } from '@angular/core';
import { specialRoom } from '../../../../../shared/interface/hotel-classic';
import { TicketSectionComponent } from '../../../../../shared/components/comman/ticket-section/ticket-section.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';
import { AnimationComponent } from '../../../../../shared/components/comman/animation/animation.component';

@Component({
    selector: 'app-hotel-classic-ticket-section',
    templateUrl: './hotel-classic-ticket-section.component.html',
    styleUrls: ['./hotel-classic-ticket-section.component.scss'],
    standalone: true,
    imports: [AnimationComponent, TitleComponent, TicketSectionComponent]
})
export class HotelClassicTicketSectionComponent {

  @Input() id: number[];
  @Input() ticketSection: specialRoom[];

  ngOnChanges(){
     if (Array.isArray(this.id)) {
      this.ticketSection = this.ticketSection?.filter((item) => {
        return this.id.includes(item.id)
      })
    }
  }
}
