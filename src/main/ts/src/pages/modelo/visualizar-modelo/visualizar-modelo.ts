import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ModeloServiceProvider } from '../../../providers/modelo-service/modelo-service';

@IonicPage()
@Component({
  selector: 'page-visualizar-modelo',
  templateUrl: 'visualizar-modelo.html',
})
export class VisualizarModeloPage implements OnInit
{

  public modelo: any;

  constructor(public modeloServiceProvider: ModeloServiceProvider, public navCtrl: NavController, public navParams: NavParams)
  {

  }

  ngOnInit()
  {    
    if(this.navParams.get('modeloId'))
    {
      this.findModeloById(this.navParams.get('modeloId'));
    }
  }

  public findModeloById(id: number)
  {
    this.modeloServiceProvider.findModeloById(id).subscribe( modelo => 
    {
      this.modelo = modelo;
    }, err => console.log(err))
  }

}
