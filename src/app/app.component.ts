import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage} from '@ionic/storage'


import {WelcomePage} from "../pages/welcome/welcome";
import {RegisterPage} from "../pages/user/register/register";
import {LoginPage} from "../pages/user/login/login";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;// = WelcomePage

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage:Storage) {
    /*通过storage的缓存信息判断是不展示欢迎页*/
    this.storage.get('firstIn').then((result)=>{

      if(result){
        this.rootPage = RegisterPage;
      }else {
        this.storage.set('firstIn',true);
        this.rootPage = WelcomePage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
