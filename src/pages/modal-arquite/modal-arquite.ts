import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams,Loading, LoadingController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ModalArquitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-arquite',
  templateUrl: 'modal-arquite.html',
})
export class ModalArquitePage {
  video: any = {
    url: 'https://www.youtube.com/embed/FImf4vDXAQI',

};

trustedVideoUrl: SafeResourceUrl;
    loading: Loading;

  constructor(public navCtrl: NavController, private view:ViewController,public navParams: NavParams,public loadingCtrl: LoadingController,
    private domSanitizer: DomSanitizer) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalArquitePage');
  }
  closeModal(){
    this.view.dismiss();

  }

}
