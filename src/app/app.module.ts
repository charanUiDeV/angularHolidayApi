import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import{routing} from './app.route';
import { AppComponent } from './app.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { HolidayDetailComponent } from './holiday-detail/holiday-detail.component';
import { HolidayServiceService } from './holiday-service.service';
import { HttpModule } from '@angular/http';
import { DashComponent } from './dash/dash.component';


@NgModule({
  declarations: [
    AppComponent,
    HolidaysComponent,
    HolidayDetailComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,   
    routing,
    HttpModule

  ],
  providers: [HolidayServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
