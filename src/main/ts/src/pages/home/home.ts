import { UtilsProvider } from './../../providers/utils/utils';

import { MarcaServiceProvider } from './../../providers/marca-service/marca-service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConsultarMarcasPage } from '../consultar-marcas/consultar-marcas';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit
{

  public marca: any = {};


  constructor(private _vibration: Vibration,
    public utilsProvider: UtilsProvider,
    public navParams: NavParams,
    public navCtrl: NavController,
    public marcaServiceProvider: MarcaServiceProvider) 
  {

  }

  ngOnInit()
  {
    if (this.navParams.get('marcaId'))
    {
      this.findMarcaById(this.navParams.get('marcaId'));
    }
  }

  public findMarcaById(id: number)
  {
    this.marcaServiceProvider.findMarcaById(id).subscribe(marca => 
    {
      this.marca = marca;
    }, err => console.log(err))
  }

  public insertMarca(form)
  {
    if (form.valid)
    {
      let loading = this.utilsProvider.presentLoading('Salvando marca...');

      loading.present();
      if (this.navParams.get('marcaId'))
      {
        this.marcaServiceProvider.updateMarca(this.marca).subscribe(result =>
        {
          this.utilsProvider.presentToast('Marca atualizada com sucesso!');
          this.navCtrl.setRoot(ConsultarMarcasPage);

          loading.dismissAll();
        }, execption =>
          {
            this.utilsProvider.presentToast(execption.error.message)
            loading.dismissAll();
          })
      }
      else
      {
        this.marcaServiceProvider.insertMarca(this.marca).subscribe(result =>
        {
          this.utilsProvider.presentToast('Marca inserida com sucesso!');
          this.navCtrl.setRoot(ConsultarMarcasPage)
          loading.dismissAll();
        }, err =>
        {
          loading.dismissAll();
        })
      }
    }
    else
    {
      this.utilsProvider.presentToast('Formulário inválido!');
      this._vibration.vibrate(500);
    }
  }

}
