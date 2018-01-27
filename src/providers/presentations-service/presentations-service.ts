import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Global } from './../../app/global';
import { IPresentations } from '../../interfaces/ipresentations';

@Injectable()
export class PresentationsServiceProvider {

  public urlApp = Global.urlMain;
  public presentationsUrl = this.urlApp + 'api/presentations';

  constructor(public http: Http) {
    console.log('Hello PresentationsServiceProvider Provider');
  }

  listPresentations():Observable<IPresentations[]>{
    return this.http.get(this.presentationsUrl).map(res => res.json()).catch(this.erro);
  }

  erro(error){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
