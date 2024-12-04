import { Component, Input } from '@angular/core';
import { deal } from '../../../../../shared/interface/tour-trending';
import { TourService } from '../../../../../shared/services/tour.service';
import { DealsComponent } from '../../../../../shared/components/comman/deals/deals.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-flight-minimal-best-deals',
    templateUrl: './flight-minimal-best-deals.component.html',
    styleUrls: ['./flight-minimal-best-deals.component.scss'],
    standalone: true,
    imports: [TitleComponent, DealsComponent]
})
export class FlightMinimalBestDealsComponent {

  @Input() id: number[];

  public deals: deal[];
  public description = "View all live offers for your flight bookings"

  constructor(private tourService: TourService){
    this.tourService.deals().subscribe(response => {
      this.deals = response.deals;

      if (Array.isArray(this.id)) {
       this.deals = this.deals?.filter((item) => {
         return this.id.includes(item.id)
       })
     }
    })
  }
}
