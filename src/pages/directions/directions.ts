import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions
 } from '@ionic-native/google-maps';

@Component({
  selector: 'page-directions',
  templateUrl: 'directions.html',
})
export class DirectionsPage {

  map: GoogleMap;
  mapElement: HTMLElement;

  constructor(public navCtrl: NavController, public navParams: NavParams, public googleMaps: GoogleMaps, public platform:Platform) {

    setTimeout(() => {
      this.loadMap();
      }, 200);

  }

  ionViewWillLeave() {
    this.clearMap(this.map);
  }
   
  clearMap(map) {
    map.clear();
  }

  ngOnDestroy() {
    this.map.remove();
    this.map = null;
  }

   loadMap() {
    
    this.mapElement = document.getElementById('map_canvas');

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(this.mapElement, mapOptions); 

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
      });
  }

}
