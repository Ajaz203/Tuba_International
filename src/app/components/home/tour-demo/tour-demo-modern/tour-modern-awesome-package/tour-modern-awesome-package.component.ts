import { Component, Input } from '@angular/core';
import { category } from '../../../../../shared/interface/tour-modern';
import { CategoryComponent } from '../../../../../shared/components/comman/category/category.component';
import { TitleComponent } from '../../../../../shared/components/comman/title/title.component';

@Component({
    selector: 'app-tour-modern-awesome-package',
    templateUrl: './tour-modern-awesome-package.component.html',
    styleUrls: ['./tour-modern-awesome-package.component.scss'],
    standalone: true,
    imports: [TitleComponent, CategoryComponent]
})
export class TourModernAwesomePackageComponent {

  @Input() id: number[];
  @Input() package: category[];

  public description = "Trips, experiences, and places. All in one service.";

   ngOnChanges(){
    if (Array.isArray(this.id)) {
      this.package = this.package?.filter((item) => {
        return this.id.includes(item.id)
      })
    }
  }

}
