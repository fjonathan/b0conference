import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { IPartners } from '../../interfaces/ipartners';
import { Global } from './../../app/global';

//import jQuery from "jquery";

@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class ModalsPage {

  public partner:IPartners;
  public urlAssets;
  public imagemPadrao:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAh_TW8tqVoWvtXUSNz4E0j8gYEjZ5n-_vNavbPL7zJC-kcJBxdgf903s';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.urlAssets = Global.urlAssets;
    this.partner = this.navParams.get('partner');

    console.log(this.partner);

  }

  cancel(){

    setTimeout(() => {
      //jQuery('.my-modal-out').fadeOut('fast');
      this.navCtrl.pop();
      }, 100);

    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ModalsPage');
  }

}
