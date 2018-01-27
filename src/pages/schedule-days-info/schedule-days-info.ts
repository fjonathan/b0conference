import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ISchedule } from '../../interfaces/ischedule';

@Component({
  selector: 'page-schedule-days-info',
  templateUrl: 'schedule-days-info.html',
})
export class ScheduleDaysInfoPage {

  public daysinfo:ISchedule;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.daysinfo = this.navParams.get('daysinfo');
    console.log(this.daysinfo);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ScheduleDaysInfoPage');
  }

}
