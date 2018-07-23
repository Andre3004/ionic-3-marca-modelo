import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MarcaServiceProvider } from '../providers/marca-service/marca-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ConsultarMarcasPage } from '../pages/marca/consultar-marcas/consultar-marcas';
import { UtilsProvider } from '../providers/utils/utils';
import {Vibration} from '@ionic-native/vibration'
import { HttpModule } from '@angular/http';
import { ModeloServiceProvider } from '../providers/modelo-service/modelo-service';
import { ConsultarModeloPage } from '../pages/modelo/consultar-modelo/consultar-modelo';
import { LoginPage } from '../pages/login/login'
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpsRequestInterceptor } from '../providers/utils/http-resquest.interceptor'

import {IonicStorageModule} from '@ionic/storage'

@NgModule({
  declarations: [
    MyApp,
    ConsultarMarcasPage,
    ConsultarModeloPage,
    LoginPage
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'marcaModelo',
      storeName: 'marcaModelo',
      driverOrder: ['indexeddb']
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConsultarMarcasPage, 
    ConsultarModeloPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MarcaServiceProvider,
    UtilsProvider, 
    Vibration,
    ModeloServiceProvider,
    AuthServiceProvider,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpsRequestInterceptor,
      multi: true,
     },
  ],
})
export class AppModule {}
