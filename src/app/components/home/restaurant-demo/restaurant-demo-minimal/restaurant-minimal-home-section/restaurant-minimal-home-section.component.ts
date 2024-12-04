import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';

@Component({
    selector: 'app-restaurant-minimal-home-section',
    templateUrl: './restaurant-minimal-home-section.component.html',
    styleUrls: ['./restaurant-minimal-home-section.component.scss'],
    standalone: true,
    imports: [BreadcrumbsComponent]
})
export class RestaurantMinimalHomeSectionComponent {

}
