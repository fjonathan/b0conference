import { Component } from '@angular/core';
import { Renderer } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { PartnersServiceProvider } from '../../providers/partners-service/partners-service';
import { ModalsPage } from '../modals/modals';
import { IPartners } from '../../interfaces/ipartners';
import { Global } from './../../app/global';

import { Storage } from '@ionic/Storage';
import { Network } from '@ionic-native/Network';

@Component({
  selector: 'page-partners',
  templateUrl: 'partners.html',
})
export class PartnersPage {

  public partnersList: IPartners[];
  public urlAssets;
  public imagemPadrao:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAh_TW8tqVoWvtXUSNz4E0j8gYEjZ5n-_vNavbPL7zJC-kcJBxdgf903s';
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public PartnersServiceProvider: PartnersServiceProvider, public storage: Storage, public modalCtrl: ModalController, public renderer: Renderer, public network: Network) {
  
    this.urlAssets = Global.urlAssets;    

    network.type;
      
    if(network.type != "none") {
      this.getPartnersOnline();
    }else{
       this.getPartnersStorage();
    }

    this.network.onConnect().subscribe(res=>{
      this.getPartnersOnline();
      console.log('speakers data online');
    });

    this.network.onDisconnect().subscribe(res=>{
      this.getPartnersStorage();
      console.log('speakers data STORAGE');
    });

  }

  getPartnersOnline (){
    
    this.PartnersServiceProvider.listAllPartners().subscribe(data => {
    
    this.storage.set('partnersList', data);
    this.partnersList = data;
    
    }, erro => {
      console.log(erro);
    });

  }

  getPartnersStorage (){
    
    this.storage.get('partnersList').then((val) => {
      this.partnersList = val;
      console.log(this.partnersList);
    });
    
  }

  doRefresh(refresher) {
    
    setTimeout(() => {

      refresher.complete();
      this.getPartnersOnline();

    }, 1000);
   }

  openDetail(partner:IPartners){

    let myModal = this.modalCtrl.create(ModalsPage, {partner:partner}, {
      enterAnimation: 'modal-slide-in',
      leaveAnimation: 'modal-slide-out',
      cssClass: 'my-modal-out',
      showBackdrop: false
    });

    myModal.present();
  }
   
  ionViewDidLoad() {
    //console.log('ionViewDidLoad PartnersPage');
  }

}
