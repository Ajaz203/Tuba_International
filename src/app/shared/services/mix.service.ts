import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mixClassic } from '../interface/mix-classic';

@Injectable({
  providedIn: 'root'
})
export class MixService {

  constructor(private http: HttpClient) {}

  // Mix Classic
  mixClassic(): Observable<mixClassic> {
    return this.http.get<mixClassic>('assets/json/theme/mix-classic.json');
  }
}
