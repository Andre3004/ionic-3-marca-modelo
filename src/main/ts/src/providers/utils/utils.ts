import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class UtilsProvider
{

  constructor(public http: HttpClient, public toastCtrl: ToastController)
  {
    console.log('Hello UtilsProvider Provider');
  }

  presentToast(text) 
  {
    const toast = this.toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }
}
