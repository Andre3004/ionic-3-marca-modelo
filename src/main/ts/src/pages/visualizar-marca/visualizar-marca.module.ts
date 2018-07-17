import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisualizarMarcaPage } from './visualizar-marca';

@NgModule({
  declarations: [
    VisualizarMarcaPage,
  ],
  imports: [
    IonicPageModule.forChild(VisualizarMarcaPage),
  ],
  exports: [VisualizarMarcaPage]
})
export class VisualizarMarcaPageModule {}
