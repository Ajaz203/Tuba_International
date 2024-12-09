import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { cab, cabDetails, cabs } from '../interface/cab';
import { cabClassic } from '../interface/cab-classic';
import { cabMap } from '../interface/cab-map';
import { cabDetailsModern, cabModern } from '../interface/cab-modern';


@Injectable({
  providedIn: 'root'
})
export class CabService {
  apiUrl = 'https://tuba-mongo-backend.onrender.com/';
  header: any = {
    "Access-Control-Allow-Origin": "true",
    
  };

  public isOpenResponsiveFilter: boolean = false;
  public isOpenHorizontalFilter: boolean = false;

  constructor(private http: HttpClient) { }
  cabBooking(data: any) {
    console.log("cab service data ",data);
    return this.http.post(this.apiUrl + `bookMyCab`, data );
  }

  // Cab Modern
  cabModern(): Observable<cabModern> {
    return this.http.get<cabModern>('assets/json/theme/cab-modern.json');
  }

  // Cab Classic
  cabClassic(): Observable<cabClassic> {
    return this.http.get<cabClassic>('assets/json/theme/cab-classic.json');
  }

  // Cab Map
  cabMapDemo(): Observable<cabMap> {
    return this.http.get<cabMap>('assets/json/theme/cab-map.json');
  }

  // Cab Details
  cabDetails(): Observable<cabDetailsModern> {
    return this.http.get<cabDetailsModern>('assets/json/cab.json');
  }

  // Cabs
  cab(): Observable<cabs> {
    return this.http.get<cabs>('assets/json/grid/cabs.json')
  }

  // Cab SinglePage
  cabPage(): Observable<cabDetails> {
    return this.http.get<cabDetails>('assets/json/pages/cab-details.json')
  }

  // Cab Filter
  public cabs: string | undefined;
  getCabDetails(filter: string[]): Observable<cab[]> {
    return this.cab().pipe(map((cab) =>
      cab.cab.filter((item) => {
        if (!filter.length) {
          return true
        }
        this.cabs = filter.find((data: string) => {
          if (item.tags) {
            if (item.tags.includes(data))
              return data
          }
        })
        return this.cabs;
      })
    ));
  }

  // Get Max Price
  getMaxPrice(): Observable<number> {
    return this.cab().pipe(map((cab) => Math.max(...cab.cab.map((price) => price.price))));
  }
}
