import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';

/*
  Generated class for the PushnotifcationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushnotifcationProvider {

  constructor(private oneSignal: OneSignal, public plataforma:Platform) {
    console.log('Hello PushnotifcationProvider Provider');
  }

  init_notifications(){

   if (this.plataforma.is('cordova')) {

    this.oneSignal.startInit('34321404-89cc-4ab2-a6a2-b0b07b441b97', '683702497167');

this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

this.oneSignal.handleNotificationReceived().subscribe(() => {
 // do something when notification is received
});

this.oneSignal.handleNotificationOpened().subscribe(() => {
  // do something when a notification is opened
});

this.oneSignal.endInit();
  } else {
    console.log('No funciona en web');
  }

   }


}
