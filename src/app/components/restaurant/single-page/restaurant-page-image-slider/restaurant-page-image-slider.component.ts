import { Component } from '@angular/core';
import { hotelGallery } from '../../../../shared/interface/hotel';
import { restaurants } from '../../../../shared/interface/restaurant';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { HotelService } from '../../../../shared/services/hotel.service';
import { CurrencySymbolPipe } from '../../../../shared/pipe/currency.pipe';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { RestaurantCartItemsComponent } from '../widgets/restaurant-cart-items/restaurant-cart-items.component';
import { RestaurantDetailSliderComponent } from '../widgets/restaurant-detail-slider/restaurant-detail-slider.component';
import { RestaurantReviewComponent } from '../widgets/restaurant-review/restaurant-review.component';
import { RestaurantBookTableComponent } from '../widgets/restaurant-book-table/restaurant-book-table.component';
import { RestaurantLocationComponent } from '../widgets/restaurant-location/restaurant-location.component';
import { RestaurantGalleryComponent } from '../widgets/restaurant-gallery/restaurant-gallery.component';
import { RestaurantOverviewComponent } from '../widgets/restaurant-overview/restaurant-overview.component';
import { RestaurantOrdersComponent } from '../widgets/restaurant-orders/restaurant-orders.component';
import { RestaurantPageTabsComponent } from '../widgets/restaurant-page-tabs/restaurant-page-tabs.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-restaurant-page-image-slider',
    templateUrl: './restaurant-page-image-slider.component.html',
    styleUrl: './restaurant-page-image-slider.component.scss',
    standalone: true,
    imports: [HeaderComponent, CarouselModule, RestaurantPageTabsComponent, RestaurantOrdersComponent, RestaurantOverviewComponent, RestaurantGalleryComponent, RestaurantLocationComponent, RestaurantBookTableComponent, RestaurantReviewComponent, RestaurantDetailSliderComponent, RestaurantCartItemsComponent, FooterComponent, LayoutComponent, CurrencySymbolPipe]
})
export class RestaurantPageImageSliderComponent {
  
  public activeTab = 'order';

  public restaurantDetails: restaurants;
  public restaurantGallery: hotelGallery[];

  public options = {
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 3
      }
    }
  }

  constructor(private restaurantService: RestaurantService, public hotelService: HotelService) {
    this.restaurantService.restaurantDetails().subscribe(response => {
      this.restaurantDetails = response;
      this.restaurantGallery = response.restaurantGallery;
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
