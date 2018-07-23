import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarcaServiceProvider } from '../../providers/marca-service/marca-service';
import { UtilsProvider } from '../../providers/utils/utils';
import { Vibration } from '@ionic-native/vibration';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { ConsultarMarcasPage } from '../marca/consultar-marcas/consultar-marcas';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage
{

  /**
   * 
   */
  public usuario: any = {};

  /**
   * 
   * @param _vibration 
   * @param utilsProvider 
   * @param navParams 
   * @param navCtrl 
   * @param loginServiceProvider 
   */
  constructor(private _vibration: Vibration,
    public utilsProvider: UtilsProvider,
    public navParams: NavParams,
    public navCtrl: NavController,
    public loginServiceProvider: LoginServiceProvider)
  {
  }


  public login(form)
  {
    if (form.valid)
    {
      let loading = this.utilsProvider.presentLoading('Realizando login...');

      loading.present();

      this.loginServiceProvider.login(this.usuario).subscribe(result =>
      {
        this.navCtrl.setRoot(ConsultarMarcasPage);
        loading.dismissAll();
      }, 
      err => 
      {
        console.log(err)
        this.utilsProvider.presentToast('Usuário ou senha inválidos!');
        this._vibration.vibrate(500);
        loading.dismissAll();
      })
    }
    else
    {
      this.utilsProvider.presentToast('Usuário e senha são obrigatórios!');
      this._vibration.vibrate(500);
    }
  }

}
