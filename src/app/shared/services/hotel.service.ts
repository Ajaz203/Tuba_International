import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { homeSectionModel, hotelRooms, services, testimonials } from '../interface/hotel-classic';
import { blog, hotelMinimal } from '../interface/hotel-minimal';
import { hotelVector } from '../interface/hotel-vector';
import { currency, hotel, hotelDetails } from '../interface/hotel';
import { Params } from '@angular/router';
import { hotels } from '../interface/hotel';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  apiUrl = 'https://tuba-mongo-backend.onrender.com/';


  public isOpenResponsiveFilter: boolean = false;
  public isOpenHorizontalFilter: boolean = false;
  public isOpenResponsiveHorizontal: boolean = false;
  public isOpenMapFilter: boolean = false;

  // Get Currency
  public currencyItem = localStorage.getItem("currency");

  public currency: string = 'usd';

  private searchResults: any = null;

  private bookingData: any = null;

  constructor(private http: HttpClient) {
    if(!localStorage.getItem('currency')?.length){
      this.currency = 'usd';
      localStorage.setItem('currency', 'usd')
    }else {
      if(this.currencyItem !== null){
        this.currency = this.currencyItem;
      }
    }
  }
 
  hotelSearch(data: any) {
    console.log("Sending search request:", data);
    return this.http.post(`${this.apiUrl}getHotelData`, data);
  }

  hotelBooking(data: any) {
    console.log("hotel service data ",data);
    return this.http.post(this.apiUrl + `bookMyHotel`, data );
  }

  
  // Home Classic Data
  hotelClassic(): Observable<homeSectionModel> {
    return this.http.get<homeSectionModel>('assets/json/theme/hotel-classic.json');
  }

  // Rooms
  hotelRooms(): Observable<hotelRooms>{
    return this.http.get<hotelRooms>('assets/json/hotel.json');
  }

  // Service
  services(): Observable<services>{
    return this.http.get<services>('assets/json/service.json')
  }

  // Testimonial
  testimonial(): Observable<testimonials>{
    return this.http.get<testimonials>('assets/json/testimonial.json')
  }

  // Hotel Minimal
  hotelMinimal(): Observable<hotelMinimal>{
    return this.http.get<hotelMinimal>('assets/json/theme/hotel-minimal.json')
  }

  // Blog
  blog(): Observable<blog>{
    return this.http.get<blog>('assets/json/blog.json')
  }

  // Hotel Vector
  hotelVector(): Observable<hotelVector>{
    return this.http.get<hotelVector>('assets/json/theme/hotel-vector.json');
  }

  // Hotel Filter
  hotel(): Observable<hotel>{
    return this.http.get<hotel>('assets/json/grid/hotel.json')
  }

  // Hotel Details
  hotelDetails(): Observable<hotelDetails>{
    return this.http.get<hotelDetails>('assets/json/pages/hotel-details.json')
  }

  public hotels: string | undefined;
  getHotelsDetails(filter: string[]): Observable<hotels[]>{
    return this.hotel().pipe(map((hotel) =>
      hotel.hotels.filter((item) => {
        if(!filter.length){
          return true
        }
        this.hotels = filter.find((data: string) => {
          if(item.tags){
            if(item.tags.includes(data))
              return data
          }
        })
        return this.hotels;
      })
    ));
  }

  getMaxPrice(): Observable<number>{
   return this.hotel().pipe(map((hotel) =>
      Math.max(...hotel.hotels.map((price) => price.price))));
    }

  searchHotels(searchParams: any): Observable<any> {
    // Replace with your actual API endpoint
    return this.http.get<any>(`/api/hotels/search`, { params: searchParams });
  }

  setSearchResults(data: any) {
    this.searchResults = data;
  }

  getSearchResults() {
    return this.searchResults;
  }

  bookCab(bookingData: any) {
    return this.http.post(`${this.apiUrl}bookMyCab`, bookingData);
  }

  setBookingData(data: any) {
    this.bookingData = data;
  }

  getBookingData() {
    return this.bookingData;
  }

  bookVisa(data: any) {
    return this.http.post(`${this.apiUrl}applyVisa`, data);
  }

 
}
