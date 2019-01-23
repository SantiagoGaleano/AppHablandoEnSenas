import { ContactoPage } from './../pages/contacto/contacto';
import { TutorialesPage } from './../pages/tutoriales/tutoriales';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ServiciosPage } from '../pages/servicios/servicios';

import {PushnotifcationProvider} from '../providers/pushnotifcation/pushnotifcation'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  showSplash=true;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public pushProvider: PushnotifcationProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },

      { title: 'Nuestros Servicios',component: ServiciosPage},
      {title: 'Tutoriales', component: TutorialesPage},
      {title: 'Contáctenos', component: ContactoPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

      this.statusBar.show();
      this.splashScreen.hide();
      this.pushProvider.init_notifications();

    });

   
  }

  openPage(page) {

    this.nav.setRoot(page.component);
  }

  // Wrap every letter in a span

}
