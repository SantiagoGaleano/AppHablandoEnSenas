import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,Loading, LoadingController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ModalAjustesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-ajustes',
  templateUrl: 'modal-ajustes.html',
})
export class ModalAjustesPage {
  video: any = {
    url: 'https://www.youtube.com/embed/jkAK3Bdkrbg',

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
    console.log('ionViewDidLoad ModalAjustesPage');
  }
  closeModal(){
    this.view.dismiss();

  }

}
