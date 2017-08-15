import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the BindAccount page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-bind-account',
  templateUrl: 'bind-account.html',
})
export class BindAccountPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BindAccount');
  }

}
