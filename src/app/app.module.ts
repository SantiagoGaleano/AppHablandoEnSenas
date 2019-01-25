import { ModalAccesiblidadPage } from './../pages/modal-accesiblidad/modal-accesiblidad';
import { ModalProvisionPage } from './../pages/modal-provision/modal-provision';
import { ModalCapacitacionPage } from './../pages/modal-capacitacion/modal-capacitacion';
import { ModalArquitePage } from './../pages/modal-arquite/modal-arquite';
import { ModalAjustesPage } from './../pages/modal-ajustes/modal-ajustes';
import { ModalSolucionesPage } from './../pages/modal-soluciones/modal-soluciones';
import { ContactoPage } from './../pages/contacto/contacto';
import { SaludosTutoPage } from './../pages/saludos-tuto/saludos-tuto';
import { MesesTutoPage } from './../pages/meses-tuto/meses-tuto';
import { InfoPersonalTutoPage } from './../pages/info-personal-tuto/info-personal-tuto';
import { DiasTutoPage } from './../pages/dias-tuto/dias-tuto';
import { ColoresTutoPage } from './../pages/colores-tuto/colores-tuto';
import { AbcTutoPage } from './../pages/abc-tuto/abc-tuto';
import { TutorialesPage } from './../pages/tutoriales/tutoriales';
import { BrowserModule } from '@angular/platform-browser';
import { OneSignal } from '@ionic-native/onesignal';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServiciosPage } from '../pages/servicios/servicios';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ScreenOrientation } from '@ionic-native/screen-orientation';
import { PushnotifcationProvider } from '../providers/pushnotifcation/pushnotifcation';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

/* ... */

 export const firebaseConfig = {
   apiKey: "AIzaSyB8vjADNpow-8UZRoGUS8oGXW7QgVjKMOM",
     authDomain: "notificacioneshablando.firebaseapp.com",
     databaseURL: "https://notificacioneshablando.firebaseio.com",
    projectId: "notificacioneshablando",
     storageBucket: "notificacioneshablando.appspot.com",
     messagingSenderId: "683702497167"
 };

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
    ContactoPage,
    ModalSolucionesPage,
    ModalProvisionPage,
    ModalCapacitacionPage,
    ModalArquitePage,
    ModalAjustesPage,
    ModalAccesiblidadPage,



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig,'notificacioneshablando'),
    AngularFireDatabaseModule,

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
    ContactoPage,
    ModalSolucionesPage,
    ModalProvisionPage,
    ModalCapacitacionPage,
    ModalArquitePage,
    ModalAjustesPage,
    ModalAccesiblidadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,



    {provide: ErrorHandler, useClass: IonicErrorHandler},

    ScreenOrientation,
    PushnotifcationProvider

  ]


})




export class AppModule {}
