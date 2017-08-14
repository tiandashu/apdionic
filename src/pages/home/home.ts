import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listData: Object;
  constructor(public navCtrl: NavController,private http: Http) {

  }
  ionViewDidLoad() {
    // 网络请求
    this.http.request('http://jsonplaceholder.typicode.com/photos')
      .toPromise().then(res=>{this.listData=res.json();})
      .catch(err=>{ console.log(err);} );

  }

}
