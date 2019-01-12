import { AbcTutoPage } from './../abc-tuto/abc-tuto';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
/**
 * Generated class for the TutorialesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutoriales',
  templateUrl: 'tutoriales.html',
})
export class TutorialesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialesPage');
     this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);

  }

  ionViewWillLeave(){
     this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  }

  atras() {
    this.navCtrl.setRoot(HomePage);
  }

  goAbc(){

    this.navCtrl.push(AbcTutoPage);

  }
   goColores(){

   }

   goDias(){

   }

   goInfoPersonal(){

   }

   goMeses(){

   }

   goSaludos(){

   }

}
