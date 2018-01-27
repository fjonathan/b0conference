import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Global } from './../../app/global';
import { ISchedule } from '../../interfaces/ischedule';

@Injectable()
export class ScheduleServiceProvider {

  public urlApp = Global.urlMain;

  public scheduleUrl = this.urlApp + 'api/scheduletest';

  constructor(public http: Http) {
    console.log('Hello ScheduleServiceProvider Provider');
  }

  listSchedule():Observable<ISchedule[]>{
    return this.http.get(this.scheduleUrl).map(res => res.json()).catch(this.erro);
  }

  erro(error){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
