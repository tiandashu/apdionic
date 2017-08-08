import { Component } from '@angular/core';
import { NavController,App } from 'ionic-angular';

import {WelcomePage} from "../welcome/welcome";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public app:App) {

  }

  showWelcome(){
    this.app.getRootNav().push(WelcomePage);
  }
}
