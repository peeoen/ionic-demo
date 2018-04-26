import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

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
import { IconsPage } from '../pages/icons/icons';
import { InputsPage } from '../pages/inputs/inputs';
import { ListsPage } from '../pages/lists/lists';
import { LoadingPage } from '../pages/loading/loading';
import { ModalPage, ModalContentPage } from '../pages/modal/modal';
import { PopoverPage, PopoverContentPage } from '../pages/popover/popover';
import { RadioPage } from '../pages/radio/radio';
import { RangePage } from '../pages/range/range';
import { SearchBarPage } from '../pages/search-bar/search-bar';
import { SegmentPage } from '../pages/segment/segment';
import { SelectPage } from '../pages/select/select';
import { SlidesPage } from '../pages/slides/slides';
import { ToastPage } from '../pages/toast/toast'; 
import { TogglePage } from '../pages/toggle/toggle';
import { FooterToolbarPage } from '../pages/footer-toolbar/footer-toolbar';
import { TabsPage, TabBasicContentPage } from '../pages/tabs/tabs';
import { CameraPage } from '../pages/camera/camera';

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
  GridPage,
  IconsPage,
  InputsPage,
  ListsPage,
  LoadingPage,
  ModalPage,
  ModalContentPage,
  PopoverPage,
  PopoverContentPage,
  RadioPage,
  RangePage,
  SearchBarPage,
  SegmentPage,
  SelectPage,
  SlidesPage,
  ToastPage,
  TogglePage,
  FooterToolbarPage,
  TabsPage,
  TabBasicContentPage,
  CameraPage
 ]

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ...components,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
