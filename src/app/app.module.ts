import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ActionSheetsPage } from '../pages/action-sheets/action-sheets';
import { AlertsPage } from '../pages/alerts/alerts';
import { BadgesPage } from '../pages/badges/badges';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';
import { CheckboxesPage } from '../pages/checkboxes/checkboxes';
import { DatetimePage } from '../pages/datetime/datetime';
import { FabsPage } from '../pages/fabs/fabs';
import { GesturesPage } from '../pages/gestures/gestures';
import { GridPage } from '../pages/grid/grid';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

const components = [
  MyApp,
  HelloIonicPage,
  ItemDetailsPage,
  ListPage,
  ActionSheetsPage,
  AlertsPage,
  BadgesPage,
  ButtonsPage,
  CardsPage,
  CheckboxesPage,
  DatetimePage,
  FabsPage,
  GesturesPage,
  GridPage
 ]

@NgModule({
  declarations: [
     ...components
    // MyApp,
    // HelloIonicPage,
    // ItemDetailsPage,
    // ListPage,
    // ActionSheetsPage,
    // AlertsPage,
    // BadgesPage,
    // ButtonsPage,
    // CardsPage,
    // CheckboxesPage,
    // DatetimePage,
    // FabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ...components
    // MyApp,
    // HelloIonicPage,
    // ItemDetailsPage,
    // ListPage,
    // ActionSheetsPage,
    // AlertsPage,
    // BadgesPage,
    // ButtonsPage,
    // CardsPage,
    // CheckboxesPage,
    // DatetimePage,
    // FabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
