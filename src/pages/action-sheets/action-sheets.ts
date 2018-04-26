import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the ActionSheetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-action-sheets',
  templateUrl: 'action-sheets.html',
})
export class ActionSheetsPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public platform: Platform,
    public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetsPage');
  }
  
  openMenu() {
      let actionSheet = this.actionSheetCtrl.create({
        title: 'Albums',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Delete',
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'trash' : null,
            handler: () => {
              console.log('Delete clicked');
            }
          },
          {
            text: 'Share',
            role: 'destructive',
            icon: !this.platform.is('ios') ? 'share' : null,
            handler: () => {
              console.log('Share clicked');
            }
          },
          {
            text: 'Play',
            icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
            handler: () => {
              console.log('Play clicked');
            }
          },
          {
            text: 'Favorite',
            icon: !this.platform.is('ios') ? 'heart-outline' : null,
            handler: () => {
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Cancel1',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Cancel2',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
              return false;
            }
          },
        ]
      });
      actionSheet.present();
  }

}
