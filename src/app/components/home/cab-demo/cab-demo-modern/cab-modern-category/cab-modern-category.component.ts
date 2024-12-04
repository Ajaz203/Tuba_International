import { Component, Input } from '@angular/core';
import { category } from '../../../../../shared/interface/tour-modern';
import { TourService } from '../../../../../shared/services/tour.service';
import { CategoryComponent } from '../../../../../shared/components/comman/category/category.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-cab-modern-category',
    templateUrl: './cab-modern-category.component.html',
    styleUrls: ['./cab-modern-category.component.scss'],
    standalone: true,
    imports: [TitleComponent, CategoryComponent]
})
export class CabModernCategoryComponent {

  @Input() id: number[];

  public category: category[];

  constructor(private tourService: TourService) {

    this.tourService.category().subscribe(response => {
      this.category = response.category;

      if(Array.isArray(this.id)){
        this.category = this.category?.filter((item) => {
          return this.id.includes(item.id)
        })
      }
    })
  }
}
