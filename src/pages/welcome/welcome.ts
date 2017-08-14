import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController ) {

  }
  goToRoot(){
    this.navCtrl.push(TabsPage);
  }
  //TODO 欢迎页不能每次打开的时候加载，安装或者升级后打开
}
