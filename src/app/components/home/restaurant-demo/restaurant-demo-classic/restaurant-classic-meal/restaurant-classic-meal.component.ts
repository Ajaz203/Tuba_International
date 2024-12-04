import { Component, Input } from '@angular/core';
import { deal } from '../../../../../shared/interface/tour-trending';
import { TourService } from '../../../../../shared/services/tour.service';
import { DealsComponent } from '../../../../../shared/components/comman/deals/deals.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-restaurant-classic-meal',
    templateUrl: './restaurant-classic-meal.component.html',
    styleUrls: ['./restaurant-classic-meal.component.scss'],
    standalone: true,
    imports: [TitleComponent, DealsComponent]
})
export class RestaurantClassicMealComponent {

  @Input() id: number[];

  public deals: deal[];

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
