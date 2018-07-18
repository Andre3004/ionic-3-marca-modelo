import { UtilsProvider } from './../../../providers/utils/utils';
import { ModeloServiceProvider } from './../../../providers/modelo-service/modelo-service';
import { CadastrarModeloPage } from './../cadastrar-modelo/cadastrar-modelo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisualizarModeloPage } from '../visualizar-modelo/visualizar-modelo';
import { Loading } from 'ionic-angular/components/loading/loading';

@IonicPage()
@Component({
  selector: 'page-consultar-modelo',
  templateUrl: 'consultar-modelo.html',
})
export class ConsultarModeloPage
{

  public modelos = [];

  public size = 7;

  public loading: Loading;

  constructor(public utilsProvider: UtilsProvider, public modeloServiceProvider: ModeloServiceProvider, public navCtrl: NavController, public navParams: NavParams)
  {
  }

  ngOnInit()
  {
    this.loading = this.utilsProvider.presentLoading('Buscando modelos...');
    this.loading.present();

    this.listModelosByFilter();
  }


  listModelosByFilter()
  {
    this.modeloServiceProvider.listModeloByFilters(this.size).subscribe(result =>
    {
      this.loading.dismissAll();
      this.modelos = result;
    }, err => this.loading.dismissAll())
  }

  selectModelo(modelo)
  {
    this.navCtrl.push(VisualizarModeloPage.name, { modeloId: modelo.id })
  }

  editModelo(modelo)
  {
    this.navCtrl.push(CadastrarModeloPage.name, { modeloId: modelo.id })
  }

  insertModelo()
  {
    this.navCtrl.push(CadastrarModeloPage.name);
  }

  removeModelo(modelo)
  {
    this.utilsProvider.showConfirm('Excluir modelo', 'Tem certeza que deseja excluir está modelo ?').addButton({
      text: 'Sim',
      handler: data => 
      {
        this.modeloServiceProvider.removeModelo(modelo.id).subscribe(result =>
        {
          this.utilsProvider.presentToast('Modelo removida com sucesso');
          this.listModelosByFilter();
        }, err =>
          {
            this.utilsProvider.presentToast('Não foi possível remover a modelo');
          })
      }
    }).present();
  }

  doInfinite(): Promise<any>
  {
    return new Promise((resolve) =>
    {
      setTimeout(() =>
      {
        this.size += 5;
        this.listModelosByFilter()
        resolve();
      }, 500);
    })
  }
}