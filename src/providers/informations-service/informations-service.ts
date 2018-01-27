import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Global } from './../../app/global';
import { IInformations } from '../../interfaces/iinformations';


@Injectable()
export class InformationsServiceProvider {

  public urlApp = Global.urlMain;

  public carroUrl = this.urlApp + 'api//pages/informations';
  constructor(public http: Http) {
  
  }

  pageInformations():Observable<IInformations[]>{
    return this.http.get(this.carroUrl).map(res => res.json()).catch(this.erro);
  }

  erro(error){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}