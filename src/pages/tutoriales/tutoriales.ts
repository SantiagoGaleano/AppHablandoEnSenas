import { AbcTutoPage } from './../abc-tuto/abc-tuto';
import {ColoresTutoPage} from './../colores-tuto/colores-tuto';
import {DiasTutoPage} from './../dias-tuto/dias-tuto';
import {MesesTutoPage} from './../meses-tuto/meses-tuto';
import {InfoPersonalTutoPage} from './../info-personal-tuto/info-personal-tuto';
import {SaludosTutoPage} from './../saludos-tuto/saludos-tuto';


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

  // ionViewWillLeave(){
  //    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  // }

  // ionViewDidEnter(){
  //   this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  // }

  ionViewWillEnter() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  atras() {
    this.navCtrl.setRoot(HomePage);
  }

  goAbc(){

    this.navCtrl.push(AbcTutoPage);

  }
   goColores(){
     this.navCtrl.push(ColoresTutoPage);

   }

   goDias(){
     this.navCtrl.push(DiasTutoPage);

   }

   goInfoPersonal(){
    this.navCtrl.push(InfoPersonalTutoPage);



   }

   goMeses(){
    this.navCtrl.push(MesesTutoPage);


   }

   goSaludos(){
    this.navCtrl.push(SaludosTutoPage);


   }

}
