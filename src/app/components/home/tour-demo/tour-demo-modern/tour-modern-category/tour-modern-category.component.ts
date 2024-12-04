import { Component, Input } from '@angular/core';
import { category } from '../../../../../shared/interface/tour-modern';
import { CategoryComponent } from '../../../../../shared/components/comman/category/category.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-tour-modern-category',
    templateUrl: './tour-modern-category.component.html',
    styleUrls: ['./tour-modern-category.component.scss'],
    standalone: true,
    imports: [TitleComponent, CategoryComponent]
})
export class TourModernCategoryComponent {

  @Input() id: number[];
  @Input() category: category[];

  public description = "Trips, experiences, and places. All in one service.";

  ngOnChanges(){
    if (Array.isArray(this.id)) {
      this.category = this.category?.filter((item) => {
        return this.id.includes(item.id)
      })
    }
  }
}
