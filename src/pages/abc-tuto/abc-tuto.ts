import { TutorialesPage } from './../tutoriales/tutoriales';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, LoadingController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


/**
 * Generated class for the AbcTutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-abc-tuto',
  templateUrl: 'abc-tuto.html',
})
export class AbcTutoPage {

  video: any = {
    url: 'https://www.youtube.com/embed/7_KN3S3XsV4',
    title: 'Colores'
};

trustedVideoUrl: SafeResourceUrl;
    loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, private screenOrientation: ScreenOrientation,public loadingCtrl: LoadingController,
    private domSanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad AbcTutoPage');
     console.log('carga metodo');
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
