import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';
/**
 * Generated class for the RadioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {
  langs;
  langForm;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioPage');
  }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();
  }

}
