import { Component, Input } from '@angular/core';
import { category } from '../../../../../shared/interface/tour-modern';
import { CategoryComponent } from '../../../../../shared/components/comman/category/category.component';

@Component({
    selector: 'app-mix-classic-category',
    templateUrl: './mix-classic-category.component.html',
    styleUrls: ['./mix-classic-category.component.scss'],
    standalone: true,
    imports: [CategoryComponent]
})
export class MixClassicCategoryComponent {

  @Input() id: number[];
  @Input() category: category[];

  ngOnChanges(){
    if(Array.isArray(this.id)){
      this.category = this.category?.filter((data) => {
        return this.id.includes(data.id)
      })
    }
  }
}
