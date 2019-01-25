import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,ViewController, LoadingController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ModalAccesiblidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-accesiblidad',
  templateUrl: 'modal-accesiblidad.html',
})
export class ModalAccesiblidadPage {
  video: any = {
    url: 'https://www.youtube.com/embed/Fy58R33SvRg',

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
    console.log('ionViewDidLoad ModalAccesiblidadPage');
  }

  closeModal(){
    this.view.dismiss();

  }

}
