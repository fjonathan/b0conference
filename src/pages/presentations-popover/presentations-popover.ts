import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { PresentationsServiceProvider } from '../../providers/presentations-service/presentations-service';
import { IPresentations } from '../../interfaces/ipresentations';

@Component({
  template: `
  <ion-list>
    <button ion-item (click)="select('')">All</button>
    <button ion-item (click)="select('Posters')">Posters</button>
    <button ion-item (click)="select('Apresentations')">Apresentations</button>
    <button ion-item (click)="select('Comunications')">Comunications</button>
  </ion-list>
`
})
export class PresentationsPopoverPage {

  public presentationsList: IPresentations[];

  constructor(public viewCtrl: ViewController, public navParams: NavParams, public PresentationsServiceProvider: PresentationsServiceProvider) {
    
    this.PresentationsServiceProvider.listPresentations().subscribe(data => {
      
        this.presentationsList = data;
      
    }, erro => {
        console.log(erro);
    });
  
  }

  close() {
    console.log(this.navParams.data);
    this.viewCtrl.dismiss();
  }

  getPresentationsList(){
    this.PresentationsServiceProvider.listPresentations().subscribe(data => {
      
        this.presentationsList = data;
      
    }, erro => {
        console.log(erro);
    });
  }

  select(value){

    let listNew;
    
    if (value === ''){
      listNew = this.presentationsList;
    }else{
      listNew = this.presentationsList.filter(item => item.values.area === value); 
    }
    
    this.viewCtrl.dismiss(listNew);

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PresentationsPopoverPage');
  }

}
