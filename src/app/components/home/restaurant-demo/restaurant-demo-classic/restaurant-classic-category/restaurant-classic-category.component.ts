import { Component, Input } from '@angular/core';
import { category } from '../../../../../shared/interface/tour-modern';
import { CategoryComponent } from '../../../../../shared/components/comman/category/category.component';

@Component({
    selector: 'app-restaurant-classic-category',
    templateUrl: './restaurant-classic-category.component.html',
    styleUrls: ['./restaurant-classic-category.component.scss'],
    standalone: true,
    imports: [CategoryComponent]
})
export class RestaurantClassicCategoryComponent {

  @Input() id: number[];
  @Input() category: category[];

  ngOnChanges(){
    if (Array.isArray(this.id)) {
      this.category = this.category?.filter((item) => {
        return this.id.includes(item.id)
      })
    }
  }
}
