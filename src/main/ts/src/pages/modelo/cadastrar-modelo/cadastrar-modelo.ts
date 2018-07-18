import { UtilsProvider } from './../../../providers/utils/utils';

import { ModeloServiceProvider } from './../../../providers/modelo-service/modelo-service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ConsultarModeloPage } from '../consultar-modelo/consultar-modelo';
import { Vibration } from '@ionic-native/vibration';
import { MarcaServiceProvider } from '../../../providers/marca-service/marca-service';

@IonicPage()
@Component({
  selector: 'page-cadastrar-modelos',
  templateUrl: 'cadastrar-modelo.html'
})
export class CadastrarModeloPage implements OnInit
{

  public modelo: any = {};

  public marcas: any = [];


  constructor(private _vibration: Vibration,
    public utilsProvider: UtilsProvider,
    public navParams: NavParams,
    public navCtrl: NavController,
    public modeloServiceProvider: ModeloServiceProvider,
    public marcaServiceProvider: MarcaServiceProvider)
  {

  }

  ngOnInit()
  {
    this.listMarcaByFilters();

    if (this.navParams.get('modeloId'))
    {
      this.findModeloById(this.navParams.get('modeloId'));
    }
  }

  public listMarcaByFilters()
  {
    this.marcaServiceProvider.listMarcaByFilters(999).subscribe(marcas => {
      this.marcas = marcas
    })
  }

  public findModeloById(id: number)
  {
    this.modeloServiceProvider.findModeloById(id).subscribe(modelo => 
    {
      this.modelo = modelo;
    }, err => console.log(err))
  }

  public insertModelo(form)
  {
    if (form.valid)
    {
      let loading = this.utilsProvider.presentLoading('Salvando modelo...');

      loading.present();
      if (this.navParams.get('modeloId'))
      {
        this.modeloServiceProvider.updateModelo(this.modelo).subscribe(result =>
        {
          this.utilsProvider.presentToast('Modelo atualizada com sucesso!');
          this.navCtrl.setRoot(ConsultarModeloPage);

          loading.dismissAll();
        }, execption =>
          {
            this.utilsProvider.presentToast(execption.error.message)
            loading.dismissAll();
          })
      }
      else
      {
        this.modeloServiceProvider.insertModelo(this.modelo).subscribe(result =>
        {
          this.utilsProvider.presentToast('Modelo inserida com sucesso!');
          this.navCtrl.setRoot(ConsultarModeloPage)
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

  compareFn(e1: any, e2: any): boolean 
  {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

}
