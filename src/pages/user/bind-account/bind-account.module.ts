import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BindAccountPage } from './bind-account';

@NgModule({
  declarations: [
    BindAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(BindAccountPage),
  ],
})
export class BindAccountModule {}
