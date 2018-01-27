import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Global } from './../../app/global';
import { IPartners } from '../../interfaces/ipartners';

@Injectable()
export class PartnersServiceProvider {

  public urlApp = Global.urlMain;
  
    public apiPartnersUrl = this.urlApp + 'api/partners';
    constructor(public http: Http) {
    
    }
  
    listAllPartners():Observable<IPartners[]>{
      return this.http.get(this.apiPartnersUrl).map(res => res.json()).catch(this.erro);
    }
  
    erro(error){
      console.error(error);
      return Observable.throw(error.json().error || 'Server Error');
    }

}
