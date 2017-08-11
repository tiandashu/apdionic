import { Component,ViewChild } from '@angular/core';
import { Platform, Tabs } from 'ionic-angular';



import { BackButtonService } from "../../providers/backButton.service";

import { SettingPage } from '../setting/setting';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots: Object[];
  @ViewChild('myTabs') tabRef: Tabs;

  constructor(public backButtonService: BackButtonService,
              private platform: Platform) {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: '主页',
        tabIcon: 'home',
        tabNum: 3,
        tabStyle: 'danger'
      },
      {
        root: ContactPage,
        tabTitle: '提醒',
        tabIcon: 'notifications',
        tabNum: 3,
        tabStyle: 'secondary'
      },
      {
        root: SettingPage,
        tabTitle: '设置',
        tabIcon: 'person'
      }
    ];
    // platform.ready().then(() => {
    //   this.backButtonService.registerBackButtonAction(this.tabRef);
    // });
  }
}
