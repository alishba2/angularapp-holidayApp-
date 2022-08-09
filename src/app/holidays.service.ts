import { Injectable } from '@angular/core';
import { Iholiday } from './holiday';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  constructor(private http: HttpClient) { }
  getHolidays(api_key:any, country:any , year:any, month:any, day:any):Observable<Iholiday[]>{
    return this.http.get<Iholiday[]>('https://holidays.abstractapi.com/v1/?api_key='+api_key+'&country='+country+'&year='+year+'&month='+month+'&day='+day)
    
  }
}
