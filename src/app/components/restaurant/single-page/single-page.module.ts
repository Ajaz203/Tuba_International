import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { SinglePageRoutingModule } from './single-page-routing.module';

import { RestaurantPageClassicComponent } from './restaurant-page-classic/restaurant-page-classic.component';
import { RestaurantPageImageSliderComponent } from './restaurant-page-image-slider/restaurant-page-image-slider.component';
import { RestaurantPageLeftCartComponent } from './restaurant-page-left-cart/restaurant-page-left-cart.component';
import { RestaurantPageTabsComponent } from './widgets/restaurant-page-tabs/restaurant-page-tabs.component';
import { RestaurantOrdersComponent } from './widgets/restaurant-orders/restaurant-orders.component';
import { RestaurantOverviewComponent } from './widgets/restaurant-overview/restaurant-overview.component';
import { RestaurantGalleryComponent } from './widgets/restaurant-gallery/restaurant-gallery.component';
import { RestaurantLocationComponent } from './widgets/restaurant-location/restaurant-location.component';
import { RestaurantBookTableComponent } from './widgets/restaurant-book-table/restaurant-book-table.component';
import { RestaurantReviewComponent } from './widgets/restaurant-review/restaurant-review.component';
import { RestaurantMenuComponent } from './widgets/restaurant-orders/restaurant-menu/restaurant-menu.component';
import { RestaurantMenuItemsComponent } from './widgets/restaurant-orders/restaurant-menu-items/restaurant-menu-items.component';
import { RestaurantDetailSliderComponent } from './widgets/restaurant-detail-slider/restaurant-detail-slider.component';
import { RestaurantCartItemsComponent } from './widgets/restaurant-cart-items/restaurant-cart-items.component';


@NgModule({
    imports: [
        CommonModule,
        SinglePageRoutingModule,
        SharedModule,
        RestaurantPageClassicComponent,
        RestaurantPageImageSliderComponent,
        RestaurantPageLeftCartComponent,
        RestaurantPageTabsComponent,
        RestaurantOrdersComponent,
        RestaurantOverviewComponent,
        RestaurantGalleryComponent,
        RestaurantLocationComponent,
        RestaurantBookTableComponent,
        RestaurantReviewComponent,
        RestaurantMenuComponent,
        RestaurantMenuItemsComponent,
        RestaurantDetailSliderComponent,
        RestaurantCartItemsComponent
    ],
    exports: [
        RestaurantCartItemsComponent
    ]
})
export class SinglePageModule { }
