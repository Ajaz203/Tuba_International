import { Component, Input } from '@angular/core';
import { NgbRatingConfig, NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { category } from '../../../../../shared/interface/tour-modern';
import { HotelService } from '../../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../../shared/pipe/currency.pipe';
import { RouterLink } from '@angular/router';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-flight-modern-category',
    templateUrl: './flight-modern-category.component.html',
    styleUrls: ['./flight-modern-category.component.scss'],
    standalone: true,
    imports: [TitleComponent, RouterLink, NgbRating, CurrencySymbolPipe]
})
export class FlightModernCategoryComponent {

  @Input() id: number[];
  @Input() category: category[];

  public description = "Your journey to romance begins here—our special couple's dinner offer transforms moments into memories at the featured destination for luxury and hospitality";

  constructor(private config: NgbRatingConfig, public hotelService: HotelService) {
		this.config.max = 5;
		this.config.readonly = true;
	}
  ngOnChanges(){
    if(Array.isArray(this.id)){
      this.category = this.category?.filter((data) => {
        return this.id.includes(data.id)
      })
    }
  }

}
