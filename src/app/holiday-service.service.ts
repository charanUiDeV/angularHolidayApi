import { Injectable } from '@angular/core';
import{Http,Response,Headers} from  '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
@Injectable()

export class HolidayServiceService {
  
  url1:string ="https://holidayapi.com/v1/holidays?key=f49d8aed-6301-4dc6-9087-593bdbe20e44&country=US&year=2017";
  url2:string ="https://holidayapi.com/v1/holidays?key=f49d8aed-6301-4dc6-9087-593bdbe20e44&country=US&year=2017&month=02"
  url3:string ="https://holidayapi.com/v1/holidays?key=f49d8aed-6301-4dc6-9087-593bdbe20e44&country=US&year=2017&month=03"
  constructor(private http:Http) { }


  getHolidays(){
    return this.http.get(this.url1).map(res =>res.json().holidays);
  }

  // getFebHolidays(){
  //   return this.http.get(this.url2).map(res =>res.json().holidays);
  // }
  // getMarchHolidays(){
  //   return this.http.get(this.url3).map(res =>res.json().holidays);
  // }
}
