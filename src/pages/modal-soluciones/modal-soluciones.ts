import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,Loading, LoadingController} from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the ModalSolucionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-soluciones',
  templateUrl: 'modal-soluciones.html',
})
export class ModalSolucionesPage {
  video: any = {
    url: 'https://www.youtube.com/embed/4NN2NnjRbgI',

};

trustedVideoUrl: SafeResourceUrl;
    loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController,public loadingCtrl: LoadingController,
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
    console.log('ionViewDidLoad ModalSolucionesPage');
  }

  closeModal(){
    this.view.dismiss();

  }

}
