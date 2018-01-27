import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Global } from './../../app/global';
import { ISpeaker } from '../../interfaces/ispeaker';

@Injectable()
export class SpeakersServiceProvider {

  public urlApp = Global.urlMain;

  public carroUrl = this.urlApp + 'api/speakers';
  constructor(public http: Http) {
  
  }

  listaCarros():Observable<ISpeaker[]>{
    return this.http.get(this.carroUrl).map(res => res.json()).catch(this.erro);
  }

  erro(error){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
