import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MarcaServiceProvider } from '../providers/marca-service/marca-service';
import { HttpClientModule } from '@angular/common/http';
import { ConsultarMarcasPage } from '../pages/consultar-marcas/consultar-marcas';
import { UtilsProvider } from '../providers/utils/utils';
import {Vibration} from '@ionic-native/vibration'
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    ConsultarMarcasPage,
    
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    ConsultarMarcasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MarcaServiceProvider,
    UtilsProvider, 
    Vibration
  ],
})
export class AppModule {}
