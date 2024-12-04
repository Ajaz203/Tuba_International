import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-restaurant-order-failed',
    templateUrl: './restaurant-order-failed.component.html',
    styleUrl: './restaurant-order-failed.component.scss',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, LayoutComponent]
})
export class RestaurantOrderFailedComponent {
  
  constructor() {}
  
}
