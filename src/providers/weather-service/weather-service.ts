import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherServiceProvider {

  apiKey = 'd83227a9bc42d7ea';
  url;

  constructor(public http: Http) {
    this.url = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
  }

  getWeather(state, city){
    return this.http.get(this.url+'/'+state+'/'+city+'.json')
      .map(res => res.json());
  }
}
