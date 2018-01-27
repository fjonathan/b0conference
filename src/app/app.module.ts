import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

// Pages
import { HomePage } from '../pages/home/home';
import { SpeakersPage } from '../pages/speakers/speakers';
import { DetailsPage } from '../pages/details/details';
import { InformationsPage } from '../pages/informations/informations';
import { InvitePage } from '../pages/invite/invite';
import { PartnersPage } from '../pages/partners/partners';
import { ModalsPage } from '../pages/modals/modals';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleDaysPage } from '../pages/schedule-days/schedule-days';
import { ScheduleDaysInfoPage } from '../pages/schedule-days-info/schedule-days-info';
import { PresentationsPage } from '../pages/presentations/presentations';
import { PdfviewerPage } from '../pages/pdfviewer/pdfviewer';
import { PresentationsPopoverPage } from '../pages/presentations-popover/presentations-popover';
import { DirectionsPage } from '../pages/directions/directions';
import { WeatherPage } from '../pages/weather/weather';

// Providers
import { SpeakersServiceProvider } from '../providers/speakers-service/speakers-service';
import { InformationsServiceProvider } from '../providers/informations-service/informations-service';
import { InviteServiceProvider } from '../providers/invite-service/invite-service';
import { PartnersServiceProvider } from '../providers/partners-service/partners-service';
import { ScheduleServiceProvider } from '../providers/schedule-service/schedule-service';
import { ScheduleServiceDaysProvider } from '../providers/schedule-service-days/schedule-service-days';
import { PresentationsServiceProvider } from '../providers/presentations-service/presentations-service';
import { WeatherServiceProvider } from '../providers/weather-service/weather-service';

// Plugins
import { IonicStorageModule } from '@ionic/Storage';
import { Network } from '@ionic-native/Network';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SpeakersPage,
    DetailsPage,
    InformationsPage,
    InvitePage,
    PartnersPage,
    ModalsPage,
    SchedulePage,
    ScheduleDaysPage,
    ScheduleDaysInfoPage,
    PresentationsPage,
    PdfviewerPage,
    PresentationsPopoverPage,
    DirectionsPage,
    WeatherPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PdfViewerModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          statusbarPadding: true
        }
      }
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SpeakersPage,
    DetailsPage,
    InformationsPage,
    InvitePage,
    PartnersPage,
    ModalsPage,
    SchedulePage,
    ScheduleDaysPage,
    ScheduleDaysInfoPage,
    PresentationsPage,
    PdfviewerPage,
    PresentationsPopoverPage,
    DirectionsPage,
    WeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    GoogleMaps,
    SpeakersServiceProvider,
    InformationsServiceProvider,
    InviteServiceProvider,
    PartnersServiceProvider,
    ScheduleServiceProvider,
    ScheduleServiceDaysProvider,
    PresentationsServiceProvider,
    WeatherServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
