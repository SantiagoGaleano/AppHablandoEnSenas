import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading,ViewController, LoadingController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ModalCapacitacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-capacitacion',
  templateUrl: 'modal-capacitacion.html',
})
export class ModalCapacitacionPage {
  video: any = {
    url: 'https://www.youtube.com/embed/EtzYg8gcqJU',

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
    console.log('ionViewDidLoad ModalCapacitacionPage');
  }
  closeModal(){
    this.view.dismiss();

  }

}
