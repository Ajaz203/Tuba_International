import { Component, Input } from '@angular/core';
import { category } from '../../../../../shared/interface/tour-modern';
import { CategoryComponent } from '../../../../../shared/components/comman/category/category.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-flight-minimal-category',
    templateUrl: './flight-minimal-category.component.html',
    styleUrls: ['./flight-minimal-category.component.scss'],
    standalone: true,
    imports: [TitleComponent, CategoryComponent]
})
export class FlightMinimalCategoryComponent {

  @Input() id: number[];
  @Input() package: category[];

  public description = "View all live offers for your flight bookings";

   ngOnChanges(){
    if (Array.isArray(this.id)) {
      this.package = this.package?.filter((item) => {
        return this.id.includes(item.id)
      })
    }
  }
}
