import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Splashscreen } from '@ionic-native/splash-screen';
import { Storage} from '@ionic/storage'

// import { Splashscreen } from 'ionic-native';


import {WelcomePage} from "../pages/welcome/welcome";
import {TabsPage} from "../pages/tabs/tabs";
import {RegisterPage} from "../pages/user/register/register";
import {LoginPage} from "../pages/user/login/login";
import {BindAccountPage} from "../pages/user/bind-account/bind-account";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;// = WelcomePage

  constructor(platform: Platform, statusBar: StatusBar, splashscreen: Splashscreen,private storage:Storage) {
    /*通过storage的缓存信息判断是不展示欢迎页*/
    this.storage.get('firstIn').then((result)=>{

      if(result){
        this.rootPage = BindAccountPage;
      }else {
        this.storage.set('firstIn',true);
        this.rootPage = WelcomePage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      // splashScreen.hide();
      setTimeout(function () {
        Splashscreen.hide();
        }, 1000);

    });
  }
}
