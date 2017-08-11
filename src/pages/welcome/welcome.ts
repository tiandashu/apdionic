import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import {LoginPage} from "../login/login";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public modalCtrl: ModalController ) {

  }
  goToRoot(){
    let modal = this.modalCtrl.create(LoginPage);
    modal.present();
  }
  //TODO 欢迎页不能每次打开的时候加载，安装或者升级后打开
}
