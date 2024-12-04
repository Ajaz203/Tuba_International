import { Component } from '@angular/core';
import { flightModern } from '../../../../shared/interface/flight-modern';
import { mixClassic } from '../../../../shared/interface/mix-classic';
import { restaurantClassic } from '../../../../shared/interface/restaurant-classic';
import { category, tourModern } from '../../../../shared/interface/tour-modern';
import { FlightService } from '../../../../shared/services/flight.service';
import { MixService } from '../../../../shared/services/mix.service';
import { RestaurantService } from '../../../../shared/services/restaurant.service';
import { TourService } from '../../../../shared/services/tour.service';
import { LayoutComponent } from '../../../../shared/components/ui/layout/layout.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { FlightModernAirlineTicketComponent } from '../../../home/flight-demo/flight-demo-modern/flight-modern-airline-ticket/flight-modern-airline-ticket.component';
import { FlightModernCategoryComponent } from '../../../home/flight-demo/flight-demo-modern/flight-modern-category/flight-modern-category.component';
import { MixClassicCategoryComponent } from '../../../home/mix-demo/mix-demo-classic/mix-classic-category/mix-classic-category.component';
import { CategoryComponent } from '../../../../shared/components/comman/category/category.component';
import { TitleComponent } from '../../../../shared/components/comman/title/title.component';
import { TourModernAwesomePackageComponent } from '../../../home/tour-demo/tour-demo-modern/tour-modern-awesome-package/tour-modern-awesome-package.component';
import { TourModernCategoryComponent } from '../../../home/tour-demo/tour-demo-modern/tour-modern-category/tour-modern-category.component';
import { RestaurantClassicSpecialDishesComponent } from '../../../home/restaurant-demo/restaurant-demo-classic/restaurant-classic-special-dishes/restaurant-classic-special-dishes.component';
import { BreadcrumbsComponent } from '../../../../shared/components/comman/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';

@Component({
    selector: 'app-element-category',
    templateUrl: './element-category.component.html',
    styleUrl: './element-category.component.scss',
    standalone: true,
    imports: [HeaderComponent, BreadcrumbsComponent, RestaurantClassicSpecialDishesComponent, TourModernCategoryComponent, TourModernAwesomePackageComponent, TitleComponent, CategoryComponent, MixClassicCategoryComponent, FlightModernCategoryComponent, FlightModernAirlineTicketComponent, FooterComponent, LayoutComponent]
})
export class ElementCategoryComponent {
  
  public bg_image = 'assets/images/inner-bg.jpg';
  public title = 'category';
  public parent = 'elements';
  public child = 'category';

  public restaurantClassic: restaurantClassic;
  public category: category[];
  public restaurantCategory: category[];
  public tourModern: tourModern;
  public cabCategory: category[];
  public mixClassic: mixClassic;
  public mixClassicCategory: category[];
  public flightModern: flightModern;
  public flightCategory: category[];

  public cabCategoryId = [8,9,10,11,12]

  constructor(
    private restaurantService: RestaurantService,
    private tourService: TourService,
    private mixService: MixService,
    private flightService: FlightService){
    this.restaurantService.restaurantClassic().subscribe(response => {
      this.restaurantClassic = response;
    })

    this.tourService.category().subscribe(response => {
      this.category = response.category;
      this.restaurantCategory = response.category;
      this.mixClassicCategory = response.category;
      this.flightCategory = response.category;

      if(Array.isArray(this.cabCategoryId)){
        this.cabCategory = this.category?.filter((item) => {
          return this.cabCategoryId.includes(item.id)
        })
      }
    })

    this.tourService.tourModern().subscribe(response => {
      this.tourModern = response;
    })

    this.mixService.mixClassic().subscribe(response => {
      if(response){
        this.mixClassic = response;
      }
    })

    this.flightService.flightModern().subscribe(response => {
      return this.flightModern = response;
    })
  }
}
