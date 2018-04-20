import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lists',
  templateUrl: 'lists.html',
})
export class ListsPage {

  items = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
  ];

  users = [
    {
      img: "https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-woody.png",
      name: "Woody",
      desc: "This town ain't big enough for the two of us!"
    },
    {
      img: "https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-buzz.png",
      name: "Buzz Ligthyear",
      desc: "My eyeballs could have been sucked from their sockets!"
    },
    {
      img: "https://ionicframework.com/dist/preview-app/www/assets/img/avatar-ts-jessie.png",
      name: "Jessie",
      desc: "Well aren't you just the sweetest space toy I ever did meet!"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListsPage');
  }


  itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}
