import { Component, Input } from '@angular/core';
import { category } from '../../../../shared/interface/tour-modern';
import { CategoryFourComponent } from './category-four/category-four.component';
import { CategoryThreeComponent } from './category-three/category-three.component';
import { CategoryTwoComponent } from './category-two/category-two.component';
import { CategoryOneComponent } from './category-one/category-one.component';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
    standalone: true,
    imports: [CategoryOneComponent, CategoryTwoComponent, CategoryThreeComponent, CategoryFourComponent]
})
export class CategoryComponent {

  @Input() type: string;
  @Input() category: category[];

}
