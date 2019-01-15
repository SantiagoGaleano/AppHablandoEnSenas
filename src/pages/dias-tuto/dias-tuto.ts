import { TutorialesPage } from './../tutoriales/tutoriales';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, LoadingController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the DiasTutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dias-tuto',
  templateUrl: 'dias-tuto.html',
})
export class DiasTutoPage {

  video: any = {
    url: 'https://www.youtube.com/embed/C7iQazHas1Q',
    
};

trustedVideoUrl: SafeResourceUrl;
    loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,private screenOrientation: ScreenOrientation,public loadingCtrl: LoadingController,
    private domSanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiasTutoPage');
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
