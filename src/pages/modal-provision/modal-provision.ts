import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,ViewController, LoadingController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ModalProvisionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-provision',
  templateUrl: 'modal-provision.html',
})
export class ModalProvisionPage {
  video: any = {
    url: 'https://www.youtube.com/embed/MLL_atzB8PY',

};

trustedVideoUrl: SafeResourceUrl;
    loading: Loading;

  constructor(public navCtrl: NavController,private view:ViewController, public navParams: NavParams,public loadingCtrl: LoadingController,
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
    console.log('ionViewDidLoad ModalProvisionPage');
  }
  closeModal(){
    this.view.dismiss();

  }
}
