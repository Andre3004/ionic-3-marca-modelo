import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarModeloPage } from './cadastrar-modelo';

@NgModule({
  declarations: [
    CadastrarModeloPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarModeloPage),
  ],

  exports: [CadastrarModeloPage]
})
export class CadastrarModeloPageModule {}
