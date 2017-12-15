import { Component } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name : string ;

  constructor(public toastCtrl: ToastController) {

  }

  greet(Name : string) 
  {
    this.toastCtrl.create({
      message :  `Hello ${Name}`,
      duration : 3000
    }).present();
  }

}
