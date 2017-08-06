import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController,public viewCtrl:ViewController) {

  }
  goToRoot(){
    this.navCtrl.push(TabsPage);
    this.viewCtrl.dismiss();
  }
}
