import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualizarModeloPage } from './visualizar-modelo';

@NgModule({
  declarations: [
    VisualizarModeloPage,
  ],
  imports: [
    IonicPageModule.forChild(VisualizarModeloPage),
  ],

  exports: [VisualizarModeloPage]
})
export class VisualizarModeloPageModule {}
