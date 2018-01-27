import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Global } from './../../app/global';
import { ISchedule } from '../../interfaces/ischedule';


@Injectable()
export class ScheduleServiceDaysProvider {

  public urlApp = Global.urlMain;
  public scheduleUrl;
  public scheduleUrlDay = this.urlApp + 'api/scheduletest/day';
  
  constructor(public http: Http) {    
   
  }
  
  listScheduleDays():Observable<ISchedule[]>{
    
    var dayID = localStorage.getItem("lastname");
    console.log(localStorage.getItem("lastname"));

    return this.http.get(this.scheduleUrlDay + dayID).map(res => res.json()).catch(this.erro);

  }

  erro(error){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }


}
