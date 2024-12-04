import { Component } from '@angular/core';
import { restaurants } from '../../../../shared/interface/restaurant';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { RestaurantDetailSliderComponent } from '../widgets/restaurant-detail-slider/restaurant-detail-slider.component';
import { RestaurantReviewComponent } from '../widgets/restaurant-review/restaurant-review.component';
import { RestaurantBookTableComponent } from '../widgets/restaurant-book-table/restaurant-book-table.component';
import { RestaurantLocationComponent } from '../widgets/restaurant-location/restaurant-location.component';
import { RestaurantGalleryComponent } from '../widgets/restaurant-gallery/restaurant-gallery.component';
import { RestaurantOverviewComponent } from '../widgets/restaurant-overview/restaurant-overview.component';
import { RestaurantOrdersComponent } from '../widgets/restaurant-orders/restaurant-orders.component';
import { RestaurantPageTabsComponent } from '../widgets/restaurant-page-tabs/restaurant-page-tabs.component';
import { RestaurantCartItemsComponent } from '../widgets/restaurant-cart-items/restaurant-cart-items.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-restaurant-page-left-cart',
    templateUrl: './restaurant-page-left-cart.component.html',
    styleUrl: './restaurant-page-left-cart.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, RestaurantCartItemsComponent, RestaurantPageTabsComponent, RestaurantOrdersComponent, RestaurantOverviewComponent, RestaurantGalleryComponent, RestaurantLocationComponent, RestaurantBookTableComponent, RestaurantReviewComponent, RestaurantDetailSliderComponent, FooterComponent, LayoutComponent]
})
export class RestaurantPageLeftCartComponent {
  
  public activeTab = 'order';

  public restaurantDetails: restaurants;

  constructor(private restaurantService: RestaurantService) {
    this.restaurantService.restaurantDetails().subscribe(response => {
      this.restaurantDetails = response;
    })
  }

  ngOnInit(){
    this.activeTab = 'order';
  }

  getTabValue(value: string){
    this.activeTab = value;
  }

  openCart(){
    this.restaurantService.isOpenCart = true;
  }
}
