import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PresentationsServiceProvider } from '../../providers/presentations-service/presentations-service';
import { IPresentations } from '../../interfaces/ipresentations';
import { PopoverController } from 'ionic-angular';

import { PresentationsPopoverPage } from '../presentations-popover/presentations-popover';
import { PdfviewerPage } from '../pdfviewer/pdfviewer';

@Component({
  selector: 'page-presentations',
  templateUrl: 'presentations.html',
})
export class PresentationsPage {

  public presentationsList: IPresentations[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public PresentationsServiceProvider: PresentationsServiceProvider, public popoverCtrl: PopoverController) {

    this.getPresentationsOnline();
    this.initializeItems();

  }

  getPresentationsOnline (){
    
      this.PresentationsServiceProvider.listPresentations().subscribe(data => {
        
          this.presentationsList = data;
          localStorage.setItem("data", JSON.stringify(data));

      }, erro => {
          console.log(erro);
      });
    
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PresentationsPopoverPage);
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(data => {
      this.presentationsList = data;

      if (data === null){
        this.PresentationsServiceProvider.listPresentations().subscribe(data => {
          
            this.presentationsList = data;
          
        });
      }else{
        console.log(data);
      }
    });
  }


  ionViewDidLoad() {
    //console.log('ionViewDidLoad PresentationsPage');
  }

  initializeItems() {
    
    this.presentationsList = JSON.parse(localStorage.getItem('data'));
    
  }

  filterItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.presentationsList = this.presentationsList.filter(function(daysinfo) {
        return daysinfo.values.title.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  doRefresh(refresher) {
    
       setTimeout(() => {

         refresher.complete();
         this.getPresentationsOnline();

       }, 1000);
   }

  openDetail(link){
    this.navCtrl.push(PdfviewerPage, {
      pdfLink:link
    });
  }

}
