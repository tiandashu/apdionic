import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  listData: Object;
  constructor(public navCtrl: NavController, public http:Http) {
  }

  Register(username,password){
    /*alert(username.value);
    this.http('http://localhost:3000/123')
      .subscribe((res:Response)=>{
        this.listData = res.json();
        console.log(this.listData);
      })*/
  }

}
