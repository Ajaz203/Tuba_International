import { Component } from '@angular/core';
import { restaurantMinimal } from '../../../../shared/interface/restaurant-minimal';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { RestaurantMinimalApplicationComponent } from './restaurant-minimal-application/restaurant-minimal-application.component';
import { RestaurantMinimalPopularRestaurantComponent } from './restaurant-minimal-popular-restaurant/restaurant-minimal-popular-restaurant.component';
import { RestaurantMinimalBookingComponent } from './restaurant-minimal-booking/restaurant-minimal-booking.component';
import { RestaurantMinimalBannerComponent } from './restaurant-minimal-banner/restaurant-minimal-banner.component';
import { RestaurantMinimalCategoryComponent } from './restaurant-minimal-category/restaurant-minimal-category.component';
import { RestaurantMinimalHomeSectionComponent } from './restaurant-minimal-home-section/restaurant-minimal-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-restaurant-demo-minimal',
    templateUrl: './restaurant-demo-minimal.component.html',
    styleUrls: ['./restaurant-demo-minimal.component.scss'],
    standalone: true,
    imports: [HeaderComponent, RestaurantMinimalHomeSectionComponent, RestaurantMinimalCategoryComponent, RestaurantMinimalBannerComponent, RestaurantMinimalBookingComponent, RestaurantMinimalPopularRestaurantComponent, RestaurantMinimalApplicationComponent, FooterComponent, LayoutComponent]
})
export class RestaurantDemoMinimalComponent {
  
  public restaurantMinimal: restaurantMinimal;

  constructor(private restaurantService: RestaurantService) {
    this.restaurantService.restaurantMinimal().subscribe(response => {
      this.restaurantMinimal = response;
    })
  }
}
