import{Route,Routes,RouterModule} from '@angular/router';
import{ModuleWithProviders} from '@angular/core';
import { HolidaysComponent } from './holidays/holidays.component';
import { HolidayDetailComponent } from './holiday-detail/holiday-detail.component';
import { DashComponent } from './dash/dash.component';

export const routes:Routes = [
     {
        path:'',
        redirectTo:'/holiday',
        pathMatch:'full'
    },
    {
        path:'holiday',
        component:DashComponent,
        children:[
            {
                path:'',
                component:HolidaysComponent
            },
            {
                path:':key',
                component: HolidayDetailComponent 
            },
            
        ]
    }

]

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);