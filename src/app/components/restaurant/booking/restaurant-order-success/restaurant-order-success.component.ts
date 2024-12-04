import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-restaurant-order-success',
    templateUrl: './restaurant-order-success.component.html',
    styleUrl: './restaurant-order-success.component.scss',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, LayoutComponent]
})
export class RestaurantOrderSuccessComponent {
  
  constructor() {}
  
}
