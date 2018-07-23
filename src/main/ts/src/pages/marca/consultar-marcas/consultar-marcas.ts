import { UtilsProvider } from './../../../providers/utils/utils';
import { MarcaServiceProvider } from './../../../providers/marca-service/marca-service';
import { CadastrarMarcasPage } from './../cadastrar-marcas/cadastrar-marcas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisualizarMarcaPage } from '../visualizar-marca/visualizar-marca';
import { Loading } from 'ionic-angular/components/loading/loading';

@IonicPage()
@Component({
  selector: 'page-consultar-marcas',
  templateUrl: 'consultar-marcas.html',
})
export class ConsultarMarcasPage
{

  public marcas = [];

  public size = 7;

  public loading: Loading;

  constructor(public utilsProvider: UtilsProvider, public marcaServiceProvider: MarcaServiceProvider, public navCtrl: NavController, public navParams: NavParams)
  {
  }

  ngOnInit()
  {
    this.loading = this.utilsProvider.presentLoading('Buscando marcas...');
    this.loading.present();

    this.listMarcasByFilter();
  }


  listMarcasByFilter()
  {
    return new Promise((resolve) =>
    {
      this.marcaServiceProvider.listMarcaByFilters(this.size).subscribe(result =>
      {
        this.loading.dismissAll();
        this.marcas = result;
      }, err =>
      {        
        this.loading.dismissAll()
      })

      setTimeout(() =>
      {

        resolve();
      }, 500);
    })
  }

  selectMarca(marca)
  {
    this.navCtrl.push(VisualizarMarcaPage.name, { marcaId: marca.id })
  }

  editMarca(marca)
  {
    this.navCtrl.push(CadastrarMarcasPage.name, { marcaId: marca.id })
  }

  insertMarca()
  {
    this.navCtrl.push(CadastrarMarcasPage.name);
  }

  removeMarca(marca)
  {
    this.utilsProvider.showConfirm('Excluir marca', 'Tem certeza que deseja excluir está marca ?').addButton({
      text: 'Sim',
      handler: data => 
      {
        this.marcaServiceProvider.removeMarca(marca.id).subscribe(result =>
        {
          this.utilsProvider.presentToast('Marca removida com sucesso');
          this.listMarcasByFilter();
        }, err =>
          {
            this.utilsProvider.presentToast('Não foi possível remover a marca');
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
        this.listMarcasByFilter()
        resolve();
      }, 500);
    })
  }
}