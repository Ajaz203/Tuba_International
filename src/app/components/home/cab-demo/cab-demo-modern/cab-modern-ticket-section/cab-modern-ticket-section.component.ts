import { Component, Input } from '@angular/core';
import { cabDetails } from '../../../../../shared/interface/cab-modern';
import { TicketSectionComponent } from '../../../../../shared/components/comman/ticket-section/ticket-section.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';
import { AnimationComponent } from '../../../../../shared/components/comman/animation/animation.component';

@Component({
    selector: 'app-cab-modern-ticket-section',
    templateUrl: './cab-modern-ticket-section.component.html',
    styleUrls: ['./cab-modern-ticket-section.component.scss'],
    standalone: true,
    imports: [AnimationComponent, TitleComponent, TicketSectionComponent]
})
export class CabModernTicketSectionComponent {

  @Input() id: number[];
  @Input() cab: cabDetails[];

  ngOnChanges(){
    if(Array.isArray(this.id)){
      this.cab = this.cab.filter((item) => {
        return this.id.includes(item.id)
      })
    }
  }
}
