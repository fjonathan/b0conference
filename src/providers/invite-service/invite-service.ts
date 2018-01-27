import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Global } from './../../app/global';
import { IInvite } from '../../interfaces/iinvite';


@Injectable()
export class InviteServiceProvider {

  public urlApp = Global.urlMain;
  
  public inviteUrl = this.urlApp + 'api/pages/invite';

  constructor(public http: Http) {
    console.log('Hello InviteServiceProvider Provider');
  }

  pageInvite():Observable<IInvite[]>{
    return this.http.get(this.inviteUrl).map(res => res.json()).catch(this.erro);
  }

  erro(error){
    console.error(error);
    return Observable.throw(error.json().error || 'Server Error');
  }

}
