import { Component, Input } from '@angular/core';
import { RestaurantSinglePageSkeletonComponent } from '../restaurant-single-page-skeleton/restaurant-single-page-skeleton.component';
import { RestaurantSkeletonComponent } from '../restaurant-skeleton/restaurant-skeleton.component';
import { CabSkeletonComponent } from '../cab-skeleton/cab-skeleton.component';
import { FlightSkeletonComponent } from '../flight-skeleton/flight-skeleton.component';
import { TourSinglePageSkeletonComponent } from '../tour-single-page-skeleton/tour-single-page-skeleton.component';
import { TourPageClassicGallerySkeletonComponent } from '../tour-page-classic-gallery-skeleton/tour-page-classic-gallery-skeleton.component';
import { TourSkeletonComponent } from '../tour-skeleton/tour-skeleton.component';
import { HotelSinglePageSkeletonComponent } from '../hotel-single-page-skeleton/hotel-single-page-skeleton.component';
import { HotelSkeletonComponent } from '../hotel-skeleton/hotel-skeleton.component';
import { MenuSkeletonComponent } from './menu-skeleton/menu-skeleton.component';

@Component({
    selector: 'app-skeleton-loader',
    templateUrl: './skeleton-loader.component.html',
    styleUrls: ['./skeleton-loader.component.scss'],
    standalone: true,
    imports: [MenuSkeletonComponent, HotelSkeletonComponent, HotelSinglePageSkeletonComponent, TourSkeletonComponent, TourPageClassicGallerySkeletonComponent, TourSinglePageSkeletonComponent, FlightSkeletonComponent, CabSkeletonComponent, RestaurantSkeletonComponent, RestaurantSinglePageSkeletonComponent]
})
export class SkeletonLoaderComponent {

  @Input() skeletonType: string;
  @Input() gridType: string;
  @Input() filter: boolean;
  @Input() filterType: string;
  @Input() mapFilter: boolean;
  @Input() mapSide: string;
  @Input() list: boolean;
  @Input() grid: boolean;
  @Input() withOutTopPage: boolean;
  @Input() breadcrumbSection: boolean;
  @Input() hotel: boolean = false;
  @Input() tour: boolean = false;
  @Input() tourClassicGallery: boolean;
  @Input() flight: boolean;
  @Input() map: boolean;
  @Input() horizontalFilter: boolean;
  @Input() restaurantBreadcrumb: boolean;

  public loaderHide: boolean = false;

  constructor(){
    setTimeout(() => {
        this.loaderHide = true;
    }, 5000);
  }
}
