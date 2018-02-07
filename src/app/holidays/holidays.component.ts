import { Component, OnInit } from '@angular/core';
import { HolidayServiceService } from '../holiday-service.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css'],
  providers:[HolidayServiceService]
})
export class HolidaysComponent implements OnInit {
 public  Specials:any[] = [];
 public  Specials1:any[] =[];
 public  Specials3:any[] =[];
// public values: Array<any> = [];
  constructor(private _holidayService: HolidayServiceService) { }

  ngOnInit() {
    this._holidayService.getHolidays().subscribe(users =>{
     

      for(let key in users){
        console.log(key);
        this.Specials.push(key);
      }
     
    });
  
  }

  }

