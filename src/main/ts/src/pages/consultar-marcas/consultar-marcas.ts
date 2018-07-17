import { UtilsProvider } from './../../providers/utils/utils';
import { MarcaServiceProvider } from './../../providers/marca-service/marca-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-consultar-marcas',
  templateUrl: 'consultar-marcas.html',
})
export class ConsultarMarcasPage
{

  public marcas = [];

  constructor(public utilsProvider :UtilsProvider,  public marcaServiceProvider: MarcaServiceProvider ,public navCtrl: NavController, public navParams: NavParams)
  {
  }

  ngOnInit()
  {
    this.listMarcasByFilter();
  }

  listMarcasByFilter()
  {
    this.marcaServiceProvider.listMarcaByFilters().subscribe(result => {
      this.marcas = result;
    })
  }

  selectMarca(marca)
  {
    this.navCtrl.push(HomePage, {marcaId: marca.id})
  }

  insertMarca()
  {
    this.navCtrl.push(HomePage);
  }

  removeMarca(marca)
  {
    this.marcaServiceProvider.removeMarca(marca.id).subscribe(result => {
      this.utilsProvider.presentToast('Marca removida com sucesso');
      this.listMarcasByFilter();
    }, err => {
      this.utilsProvider.presentToast('Não foi possível remover a marca');
    })
  }
}