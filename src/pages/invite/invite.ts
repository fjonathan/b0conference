import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InviteServiceProvider } from '../../providers/invite-service/invite-service';

import { IInvite } from '../../interfaces/iinvite';
import { HomePage } from '../home/home'
import { Global } from './../../app/global';

@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  public urlAssets;
  public pageInvite: IInvite[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public InviteServiceProvider: InviteServiceProvider) {

    this.urlAssets = Global.urlAssets;
    this.getInviteOnline();

  }

  getInviteOnline() {

    this.InviteServiceProvider.pageInvite().subscribe(data => {
      console.log(data);
      this.pageInvite = data;
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
      this.getInviteOnline();

    }, 1000);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad InvitePage');
  }

}
