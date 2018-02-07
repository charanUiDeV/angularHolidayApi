import { Component, OnInit } from '@angular/core';
import { HolidayServiceService } from '../holiday-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-holiday-detail',
  templateUrl: './holiday-detail.component.html',
  styleUrls: ['./holiday-detail.component.css'],
  providers:[HolidayServiceService]
})
export class HolidayDetailComponent implements OnInit {
  public id:string;
public Specials:any=[];
  constructor(private _holidayService: HolidayServiceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.id =this.route.snapshot.params['key.date'];
    this._holidayService.getHolidays().subscribe(users =>{
      this.Specials =users;
  });

    }
}
