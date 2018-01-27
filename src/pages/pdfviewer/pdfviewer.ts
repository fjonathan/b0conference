import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Global } from './../../app/global';

@Component({
  selector: 'page-pdfviewer',
  templateUrl: 'pdfviewer.html',
})
export class PdfviewerPage {

  public pdfLink;
  public urlAssets;
  pdfSrc: string = '';
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.urlAssets = Global.urlAssets;

    this.pdfLink = navParams.get("pdfLink");
    this.pdfSrc = this.urlAssets + '/presentations/' + this.pdfLink;

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PdfviewerPage');
  }

}
