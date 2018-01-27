import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ISchedule } from '../../interfaces/ischedule';
import { ScheduleServiceDaysProvider } from '../../providers/schedule-service-days/schedule-service-days';
import { ScheduleDaysInfoPage } from '../schedule-days-info/schedule-days-info';
import { Storage } from '@ionic/Storage';

@Component({
  selector: 'page-schedule-days',
  templateUrl: 'schedule-days.html',
})
export class ScheduleDaysPage {

  public scheduleDaysInfo: ISchedule[];
  public dayExt;

  constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams, public ScheduleServiceDaysProvider: ScheduleServiceDaysProvider) {

    this.dayExt = localStorage.getItem('day');

    this.getDaysInfo();
    this.initializeItems();
    
  }
  

  getDaysInfo(){
    
    this.ScheduleServiceDaysProvider.listScheduleDays().subscribe(data => {
      
      this.scheduleDaysInfo = data;
      localStorage.setItem("data", JSON.stringify(data));
      
      }, erro => {
        console.log(erro);
      });

  }
  
  initializeItems() {

    this.scheduleDaysInfo = JSON.parse(localStorage.getItem('data'));

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ScheduleDaysPage');
  }

  openDetail(daysinfo:ISchedule){
    this.navCtrl.push(ScheduleDaysInfoPage, {daysinfo:daysinfo});
  }

  setItems(){
    this.getDaysInfo();
  }
  

  filterItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.scheduleDaysInfo = this.scheduleDaysInfo.filter(function(daysinfo) {
        return daysinfo.values.title.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

}
