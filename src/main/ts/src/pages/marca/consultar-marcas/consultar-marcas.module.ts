import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultarMarcasPage } from './consultar-marcas';

@NgModule({
  declarations: [
    ConsultarMarcasPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultarMarcasPage),
  ]
})
export class ConsultarMarcasPageModule {}
