import { TutorialesPage } from './../tutoriales/tutoriales';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, LoadingController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the ColoresTutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-colores-tuto',
  templateUrl: 'colores-tuto.html',
})
export class ColoresTutoPage {

  video: any = {
    url: 'https://www.youtube.com/embed/ZXrh1jnCVgI',
    
};

trustedVideoUrl: SafeResourceUrl;
    loading: Loading;


  
  constructor(public navCtrl: NavController, public navParams: NavParams,private screenOrientation: ScreenOrientation, public loadingCtrl: LoadingController,
    private domSanitizer: DomSanitizer ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColoresTutoPage');
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }

  ionViewWillEnter(): void {
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);

    this.loading = this.loadingCtrl.create({
      content: 'Espere un momento, Estamos cargando el video'
    });

    this.loading.present();
}

handleIFrameLoadEvent(): void {
    this.loading.dismiss();
}

  goAtras(){
    this.navCtrl.push(TutorialesPage);
  }

}
