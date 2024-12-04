import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-restaurant-not-found',
    templateUrl: './restaurant-not-found.component.html',
    styleUrl: './restaurant-not-found.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, FooterComponent, LayoutComponent]
})
export class RestaurantNotFoundComponent {
  
  constructor() {}
  
}
