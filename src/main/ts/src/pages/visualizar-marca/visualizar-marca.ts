import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { MarcaServiceProvider } from '../../providers/marca-service/marca-service';

@IonicPage()
@Component({
  selector: 'page-visualizar-marca',
  templateUrl: 'visualizar-marca.html',
})
export class VisualizarMarcaPage implements OnInit
{

  public marca: any;

  constructor(public marcaServiceProvider: MarcaServiceProvider, public navCtrl: NavController, public navParams: NavParams)
  {
  }

  ngOnInit()
  {
    if(this.navParams.get('marcaId'))
    {
      this.findMarcaById(this.navParams.get('marcaId'));
    }
  }

  public findMarcaById(id: number)
  {
    this.marcaServiceProvider.findMarcaById(id).subscribe( marca => 
    {
      this.marca = marca;
    }, err => console.log(err))
  }

}
