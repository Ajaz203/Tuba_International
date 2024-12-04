import { Component } from '@angular/core';
import { restaurantClassic } from '../../../../shared/interface/restaurant-classic';
import { category } from '../../../../shared/interface/tour-modern';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { RestaurantClassicSocialGalleryComponent } from './restaurant-classic-social-gallery/restaurant-classic-social-gallery.component';
import { RestaurantClassicTestimonialComponent } from './restaurant-classic-testimonial/restaurant-classic-testimonial.component';
import { RestaurantClassicBookTableComponent } from './restaurant-classic-book-table/restaurant-classic-book-table.component';
import { RestaurantClassicMealComponent } from './restaurant-classic-meal/restaurant-classic-meal.component';
import { RestaurantClassicBannerComponent } from './restaurant-classic-banner/restaurant-classic-banner.component';
import { RestaurantClassicSpecialDishesComponent } from './restaurant-classic-special-dishes/restaurant-classic-special-dishes.component';
import { RestaurantClassicHappyHoursComponent } from './restaurant-classic-happy-hours/restaurant-classic-happy-hours.component';
import { RestaurantClassicServiceComponent } from './restaurant-classic-service/restaurant-classic-service.component';
import { RestaurantClassicBreakfastComponent } from './restaurant-classic-breakfast/restaurant-classic-breakfast.component';
import { RestaurantClassicOurRestaurantComponent } from './restaurant-classic-our-restaurant/restaurant-classic-our-restaurant.component';
import { RestaurantClassicCategoryComponent } from './restaurant-classic-category/restaurant-classic-category.component';
import { RestaurantClassicHomeSectionComponent } from './restaurant-classic-home-section/restaurant-classic-home-section.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-restaurant-demo-classic',
    templateUrl: './restaurant-demo-classic.component.html',
    styleUrls: ['./restaurant-demo-classic.component.scss'],
    standalone: true,
    imports: [HeaderComponent, RestaurantClassicHomeSectionComponent, RestaurantClassicCategoryComponent, RestaurantClassicOurRestaurantComponent, RestaurantClassicBreakfastComponent, RestaurantClassicServiceComponent, RestaurantClassicHappyHoursComponent, RestaurantClassicSpecialDishesComponent, RestaurantClassicBannerComponent, RestaurantClassicMealComponent, RestaurantClassicBookTableComponent, RestaurantClassicTestimonialComponent, RestaurantClassicSocialGalleryComponent, FooterComponent, LayoutComponent]
})
export class RestaurantDemoClassicComponent {
  
  public restaurantClassic: restaurantClassic;
  public category: category[];

  constructor(private restaurantService: RestaurantService, private tourService: TourService) {
    this.restaurantService.restaurantClassic().subscribe(response => {
      this.restaurantClassic = response;
    })

    this.tourService.category().subscribe(response => {
      this.category = response.category
    })
  }
}
