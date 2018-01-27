import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ScheduleServiceProvider } from '../../providers/schedule-service/schedule-service';
import { ISchedule } from '../../interfaces/ischedule';
import { ScheduleDaysPage } from '../schedule-days/schedule-days';

import { Storage } from '@ionic/Storage';
//import { Network } from '@ionic-native/Network';

@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {

  public scheduleDays: ISchedule[];

  appType = 'ProgramOne';
  
    apps: any = {
      'ProgramOne': [],
      'ProgramTwo': []
    };

    showheartIcon = true;
    showheartIconRed = false;
  
    getItems(type: any) {
      return this.apps[type];
    }

  constructor(public navCtrl: NavController, public navParams: NavParams, public ScheduleServiceProvider: ScheduleServiceProvider, public storage: Storage/*, public network: Network*/) {
    
    this.getScheduleOnline();

  }

  getScheduleOnline(){

    this.ScheduleServiceProvider.listSchedule().subscribe(data => {
      
      this.scheduleDays = data;
      this.apps['ProgramOne'] = data;
      console.log(this.apps['Paid']);
      
      }, erro => {
        console.log(erro);
      });

  }

  openDetail(days:ISchedule){
 
    var dayID = "/" + days['id'];
    var day = days['values']['day'];
    localStorage.setItem("lastname",dayID);
    localStorage.setItem("day", day);

    console.log(day);
    this.navCtrl.push(ScheduleDaysPage, {days:days});

  }

  doRefresh(refresher) {
    
       setTimeout(() => {

         refresher.complete();
         this.getScheduleOnline();

       }, 1000);
  }


  ionViewDidLoad() {
    //console.log('ionViewDidLoad SchedulePage');
  }

}
