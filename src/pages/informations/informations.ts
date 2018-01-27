import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { InformationsServiceProvider } from '../../providers/informations-service/informations-service';
import { IInformations } from '../../interfaces/iinformations';
import { HomePage } from '../home/home'
import { Global } from './../../app/global';

@Component({
  selector: 'page-informations',
  templateUrl: 'informations.html',
})
export class InformationsPage {

  public urlAssets;
  public pageInformations: IInformations[];

    constructor(public navCtrl: NavController, public navParams: NavParams, public InformationsServiceProvider: InformationsServiceProvider) {
      
      this.urlAssets = Global.urlAssets;
      this.getInformationsOnline();
       
    }

  getInformationsOnline() {

    this.InformationsServiceProvider.pageInformations().subscribe(data => {
      console.log(data);
      this.pageInformations = data;
    }, erro => {
      console.log(erro);
    });

  }  
  goHome() {
    this.navCtrl.popTo(HomePage);
  }

  doRefresh(refresher) {
    
      setTimeout(() => {

         refresher.complete();
         this.getInformationsOnline();

      }, 1000);
  }
    
  ionViewDidLoad() {
    //console.log('ionViewDidLoad InformationsPage');
  }

}
