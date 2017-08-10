import { Component } from '@angular/core';
import { ModalController} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs'

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public modalCtrl: ModalController) {
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }*/
  logIn(username: HTMLInputElement, password: HTMLInputElement) {
    if (username.value.length == 0) {
      alert("请输入账号");
    } else if (password.value.length == 0) {
      alert("请输入密码");
    } else {
      let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
      alert(userinfo);
      let modal = this.modalCtrl.create(TabsPage);
      modal.present();
    }
  }



}
