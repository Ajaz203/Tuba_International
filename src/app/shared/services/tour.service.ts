import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { tour, tourDetails, tours } from '../interface/tour';
import { categoryModel, tourModern } from '../interface/tour-modern';
import { deals, tourTrending } from '../interface/tour-trending';
import { tourVector } from '../interface/tour-vector';

@Injectable({
  providedIn: 'root'
})
export class TourService {


  public isOpenResponsiveFilter: boolean = false;
  public isOpenFindTours: boolean = false;
  public isOpenHorizontalFilter: boolean = false;
  public isOpenResponsiveHorizontal: boolean = false;

  constructor(private http: HttpClient) {}

  // Tour Modern
  tourModern(): Observable<tourModern>{
    return this.http.get<tourModern>('assets/json/theme/tour-modern.json');
  }

  // Tour Trending
  tourTrending(): Observable<tourTrending>{
    return this.http.get<tourTrending>('assets/json/theme/tour-trending.json')
  }

  // Tour Vector
  tourVector(): Observable<tourVector>{
    return this.http.get<tourVector>('assets/json/theme/tour-vector.json')
  }

  // Category
  category(): Observable<categoryModel>{
    return this.http.get<categoryModel>('assets/json/category.json')
  }

  // Deals
  deals(): Observable<deals>{
    return this.http.get<deals>('assets/json/deals.json')
  }

  // Tour Details
  tour(): Observable<tour>{
    return this.http.get<tour>('assets/json/grid/tour.json')
  }

  // Tour Single Pages
  tourDetails(): Observable<tourDetails>{
    return this.http.get<tourDetails>('assets/json/pages/tour-details.json')
  }

  public tours: string | undefined;

  getTourDetails(filter: string[]): Observable<tours[]>{
    return this.tour().pipe(map((tour) =>
      tour.tour.filter((item) => {
        if(!filter.length){
          return true
        }
        this.tours = filter.find((data: string) => {
          if(item.tags){
            if(item.tags.includes(data))
              return data
          }
        })
        return this.tours
      })
    ));
  }

  getMaxPrice(): Observable<number>{
   return this.tour().pipe(map((tour) =>
      Math.max(...tour.tour.map((price) => price.price))));
    }
}
