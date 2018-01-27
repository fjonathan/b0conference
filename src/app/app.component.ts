import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { HomePage } from '../pages/home/home';
import { SpeakersPage } from '../pages/speakers/speakers';
import { InformationsPage } from '../pages/informations/informations';
import { InvitePage } from '../pages/invite/invite';
import { PartnersPage } from '../pages/partners/partners';
import { SchedulePage } from '../pages/schedule/schedule';
import { PresentationsPage } from '../pages/presentations/presentations';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  @ViewChild('menu') nav: NavController;
  rootPage:any = HomePage;

  // Links
  HomeLink = HomePage;
  SpeakersLink = SpeakersPage;
  InformationsLink = InformationsPage;
  InviteLink = InvitePage;
  PartnersLink = PartnersPage;
  ScheduleLink = SchedulePage;
  PresentationsLink = PresentationsPage;

  goHome()
  {
    this.nav.setRoot(this.HomeLink);
    this.menuCtrl.close();
  }

  goSpeakers()
  {
    this.nav.setRoot(this.SpeakersLink);
    this.menuCtrl.close();
  }

  goInformations()
  { 
    this.nav.push(InformationsPage);
    this.menuCtrl.close();
  }

  goInvite()
  {
    this.nav.push(this.InviteLink);
    this.menuCtrl.close();
  }

  goPartners()
  {
    this.nav.setRoot(this.PartnersLink);
    this.menuCtrl.close();
  }

  goSchedule()
  {
    this.nav.setRoot(this.ScheduleLink);
    this.menuCtrl.close();
  }

  goPresentations()
  {
    this.nav.setRoot(this.PresentationsLink);
    this.menuCtrl.close();
  }

  constructor(platform: Platform, statusBar: StatusBar, public menuCtrl: MenuController, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

