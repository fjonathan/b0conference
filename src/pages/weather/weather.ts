import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { WeatherServiceProvider } from '../../providers/weather-service/weather-service'
//import jQuery from "jquery";

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html',
})
export class WeatherPage {

  weather: any;
  location: {
    city: string;
    state: string;
  }

  d = new Date();
  n = this.d.getHours();
  dayTime;

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvider: WeatherServiceProvider) {
    
    if(this.n > 18 ){
      this.dayTime = "nt_";
      console.log("night");
    }else{
      this.dayTime = "";
    }

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad WeatherPage');
  }

  ionViewWillEnter(){
    this.location = {
      city: 'Lisbon',
      state: 'PT'
    }

    this.weatherProvider.getWeather(this.location.state, this.location.city)
    .subscribe(weather => {
      this.weather = weather.current_observation;
      console.log(this.weather.icon_url);
    });
  }

  cancel(){
    
    setTimeout(() => {
      //jQuery('.my-modal-out').fadeOut('fast');
      this.navCtrl.pop();
    }, 100);
    
        
  }

}
