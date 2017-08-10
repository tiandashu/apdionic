import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';

import {WelcomePage} from "../welcome/welcome";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,public app:App) {

  }
  showWelcome(){
    // 不显示tabsnav 但是返回后的页面事件会失效
    // this.app.getRootNav().push(WelcomePage);

    this.navCtrl.push(WelcomePage);
  }
}
