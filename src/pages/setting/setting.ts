import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { LoginPage } from "../user/login/login";

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {

  constructor(public modalCtrl: ModalController ) {

  }

  logOut() {
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
}
