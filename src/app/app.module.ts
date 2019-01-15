import { ContactoPage } from './../pages/contacto/contacto';
import { SaludosTutoPage } from './../pages/saludos-tuto/saludos-tuto';
import { MesesTutoPage } from './../pages/meses-tuto/meses-tuto';
import { InfoPersonalTutoPage } from './../pages/info-personal-tuto/info-personal-tuto';
import { DiasTutoPage } from './../pages/dias-tuto/dias-tuto';
import { ColoresTutoPage } from './../pages/colores-tuto/colores-tuto';
import { AbcTutoPage } from './../pages/abc-tuto/abc-tuto';
import { TutorialesPage } from './../pages/tutoriales/tutoriales';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServiciosPage } from '../pages/servicios/servicios';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ScreenOrientation } from '@ionic-native/screen-orientation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ServiciosPage,
    TutorialesPage,
    AbcTutoPage,
    ColoresTutoPage,
    DiasTutoPage,
    InfoPersonalTutoPage,
    MesesTutoPage,
    SaludosTutoPage,
    ContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ServiciosPage,
    TutorialesPage,
    AbcTutoPage,
    ColoresTutoPage,
    DiasTutoPage,
    InfoPersonalTutoPage,
    MesesTutoPage,
    SaludosTutoPage,
    ContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ScreenOrientation
  ]
})
export class AppModule {}
