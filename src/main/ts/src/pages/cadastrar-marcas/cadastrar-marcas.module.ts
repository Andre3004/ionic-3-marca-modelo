import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CadastrarMarcasPage } from './cadastrar-marcas';

@NgModule({
  declarations: [
    CadastrarMarcasPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarMarcasPage),
  ],
  exports: [CadastrarMarcasPage]
})
export class ConsultarMarcasPageModule {}
