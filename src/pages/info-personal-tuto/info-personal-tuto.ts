import { TutorialesPage } from './../tutoriales/tutoriales';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, LoadingController  } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the InfoPersonalTutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-personal-tuto',
  templateUrl: 'info-personal-tuto.html',
})
export class InfoPersonalTutoPage {

  video: any = {
    url: 'https://www.youtube.com/embed/-x1cZ1Gkxpc',
    
};

trustedVideoUrl: SafeResourceUrl;
    loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,
    private domSanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPersonalTutoPage');
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
