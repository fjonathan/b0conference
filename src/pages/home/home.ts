import { Component } from '@angular/core';
import { Platform, NavController, ModalController } from 'ionic-angular';

import { DirectionsPage } from '../directions/directions';
import { WeatherPage } from '../weather/weather';

import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pushPage: any;
  
  d = new Date();
  n = this.d.getHours();
  dayTime;

  

  constructor(public platform: Platform, public navCtrl: NavController, public modalCtrl: ModalController, splashScreen: SplashScreen) {

    this.pushPage = DirectionsPage;

    if(this.n > 18 ){
      this.dayTime = "nt_";
      console.log("night");
    }else{
      this.dayTime = "";
    }
  }
  
  openDetail(){
    
    let myModal = this.modalCtrl.create(WeatherPage, {
        enterAnimation: 'modal-slide-in',
        leaveAnimation: 'modal-slide-out',
        cssClass: 'my-modal-out',
       showBackdrop: false
    });

      myModal.present();
  }

}
