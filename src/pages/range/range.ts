import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
})
export class RangePage {

  brightness: number = 20;
  contrast: number = 0;
  warmth: number = 1300;
  structure: any = { lower: 33, upper: 60 };
  text: number = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RangePage');
  }

}
