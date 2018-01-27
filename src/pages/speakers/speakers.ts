import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SpeakersServiceProvider } from '../../providers/speakers-service/speakers-service';
import { DetailsPage } from '../details/details'
import { ISpeaker } from '../../interfaces/ispeaker';
import { Global } from './../../app/global';

import { Storage } from '@ionic/Storage';
import { Network } from '@ionic-native/Network';

@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {
  
  public speakersList: ISpeaker[];
  public urlAssets;
  public imagemPadrao:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAh_TW8tqVoWvtXUSNz4E0j8gYEjZ5n-_vNavbPL7zJC-kcJBxdgf903s';

  constructor(public navCtrl: NavController, public navParams: NavParams, public SpeakersServiceProvider: SpeakersServiceProvider, public storage: Storage, public network: Network) {

    this.urlAssets = Global.urlAssets;
    this.displayData();

  }

  displayData() {

    this.network.type;
    this.getSpeakersOnline();
    if(this.network.type != "none") {
      
        if (this.getSpeakersOnline.toString == this.getSpeakersStorage.toString){

          // If Online equal Storage
          this.getSpeakersStorage();

        }else{
              
          // If Online different Storage
          this.getSpeakersOnline();
              
        }
      
    }else{
          
      // Get offline Data
      this.getSpeakersStorage();
            
    }

  }


  getSpeakersOnline (){

      this.SpeakersServiceProvider.listaCarros().subscribe(data => {

      this.storage.set('speakersList', data);
      this.speakersList = data;

      }, erro => {
        console.log(erro);
      });
  }

  getSpeakersStorage (){
    
    this.storage.get('speakersList').then((val) => {
      this.speakersList = val;
    });
    
  }

  doRefresh(refresher) {
     
        setTimeout(() => {

          refresher.complete();
          this.displayData();

        }, 1000);
    }

  openDetail(carro:ISpeaker){
    this.navCtrl.push(DetailsPage, {carro:carro});
  }


}
