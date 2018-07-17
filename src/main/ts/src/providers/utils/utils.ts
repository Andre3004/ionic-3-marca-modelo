import { Injectable } from '@angular/core';
import { ToastController, AlertController, Alert, LoadingController } from 'ionic-angular';
import { Loading } from 'ionic-angular/components/loading/loading';

@Injectable()
export class UtilsProvider
{

  constructor(
    private _toastCtrl: ToastController,
    private _alertCtrl: AlertController,
    private _loadingCtrl: LoadingController)
  {
  }

  presentToast(text) 
  {
    const toast = this._toastCtrl.create({
      message: text,
      duration: 3000
    });
    toast.present();
  }

  showConfirm(title, message): Alert
  {
    const confirm = this._alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Não'
        }
      ]
    });

    return confirm;
  }

  presentLoading(content): Loading
  {
    let loader = this._loadingCtrl.create({
      content: content
    });

    return loader;
  }
}
