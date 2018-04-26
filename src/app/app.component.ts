import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
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
import { ModalPage } from '../pages/modal/modal';
import { PopoverPage } from '../pages/popover/popover';
import { RadioPage } from '../pages/radio/radio';
import { RangePage } from '../pages/range/range';
import { SearchBarPage } from '../pages/search-bar/search-bar';
import { SegmentPage } from '../pages/segment/segment';
import { SelectPage } from '../pages/select/select';
import { SlidesPage } from '../pages/slides/slides';
import { ToastPage } from '../pages/toast/toast'; 
import { TogglePage } from '../pages/toggle/toggle';
import { FooterToolbarPage } from '../pages/footer-toolbar/footer-toolbar';
import { TabsPage } from '../pages/tabs/tabs';
import { CameraPage } from '../pages/camera/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Action Sheets', component: ActionSheetsPage},
      { title: 'Alerts', component: AlertsPage},
      { title: 'Badges', component: BadgesPage},
      { title: 'Buttons', component: ButtonsPage},
      { title: 'Cards', component: CardsPage},
      { title: 'Checkboxes', component: CheckboxesPage},
      { title: 'Datetime', component: DatetimePage},
      { title: 'FABs', component: FabsPage},
      { title: 'Gestures', component: GesturesPage},
      { title: 'Grid', component: GridPage},
      { title: 'Icons', component: IconsPage},
      { title: 'Inputs', component: InputsPage},
      { title: 'Lists', component: ListsPage},
      { title: 'Loading', component: LoadingPage},
      { title: 'Modal', component: ModalPage},
      { title: 'Popover', component: PopoverPage},
      { title: 'Radio', component: RadioPage},
      { title: 'Range', component: RangePage},
      { title: 'Search bar', component: SearchBarPage},
      { title: 'Segment', component: SegmentPage},
      { title: 'Select', component: SelectPage},
      { title: 'Slides', component: SlidesPage},
      { title: 'Toast', component: ToastPage},
      { title: 'Toggle', component: TogglePage},
      { title: 'Footer Toolbar', component: FooterToolbarPage},
      { title: 'Tabs', component: TabsPage},
      { title: 'Camera', component: CameraPage},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
