import { Component, Input } from '@angular/core';
import { PagesBreadcrumbComponent } from './pages-breadcrumb/pages-breadcrumb.component';
import { RestaurantSinglePageBreadcrumbComponent } from './restaurant-single-page-breadcrumb/restaurant-single-page-breadcrumb.component';
import { RestaurantBreadcrumbComponent } from './restaurant-breadcrumb/restaurant-breadcrumb.component';
import { CabBreadcrumbComponent } from './cab-breadcrumb/cab-breadcrumb.component';
import { FlightBreadcrumbComponent } from './flight-breadcrumb/flight-breadcrumb.component';
import { TourBreadcrumbSinglePageComponent } from './tour-breadcrumb-single-page/tour-breadcrumb-single-page.component';
import { TourBreadcrumbComponent } from './tour-breadcrumb/tour-breadcrumb.component';
import { HotelBreadcrumbTitleComponent } from './hotel-breadcrumb-title/hotel-breadcrumb-title.component';
import { HotelBreadcrumbComponent } from './hotel-breadcrumb/hotel-breadcrumb.component';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.scss'],
    standalone: true,
    imports: [HotelBreadcrumbComponent, HotelBreadcrumbTitleComponent, TourBreadcrumbComponent, TourBreadcrumbSinglePageComponent, FlightBreadcrumbComponent, CabBreadcrumbComponent, RestaurantBreadcrumbComponent, RestaurantSinglePageBreadcrumbComponent, PagesBreadcrumbComponent]
})
export class BreadcrumbsComponent {

  @Input() type: string;
  @Input() bg_image: string;
  @Input() title: string;
  @Input() parent: string;
  @Input() subParent: string;
  @Input() child: string;
  @Input() days: number;
  @Input() date: string;
  @Input() slider: boolean = false;
  @Input() birdAnimation: boolean = false;
  @Input() tourVideo: boolean = false;
  @Input() tourBreadcrumb: boolean = false;
  @Input() FlightDetails: boolean;
  @Input() sectionClass: string;
  @Input() paddingClass: boolean = false;
  
}
