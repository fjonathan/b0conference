import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ISpeaker } from '../../interfaces/ispeaker';
import { Global } from './../../app/global';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  public carro:ISpeaker;
  public abab;
  public imagemPadrao:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAh_TW8tqVoWvtXUSNz4E0j8gYEjZ5n-_vNavbPL7zJC-kcJBxdgf903s';

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.abab = Global.urlAssets;
    this.carro = this.navParams.get('carro');

    //console.log(this.carro);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DetailsPage');
  }

}
