import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http,Response } from '@angular/http';

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
    var body = {username:username};
    this.http.post('http://192.168.3.25:3000/register',JSON.stringify(body))
      .subscribe((res:Response)=>{
        console.log(res['_body']);
      })
  }

}
