import { ModalAccesiblidadPage } from './../modal-accesiblidad/modal-accesiblidad';
import { ModalAjustesPage } from './../modal-ajustes/modal-ajustes';
import { ModalProvisionPage } from './../modal-provision/modal-provision';
import { ModalCapacitacionPage } from './../modal-capacitacion/modal-capacitacion';
import { ModalArquitePage } from './../modal-arquite/modal-arquite';
import { ModalSolucionesPage } from './../modal-soluciones/modal-soluciones';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,ModalOptions } from 'ionic-angular';

/**
 * Generated class for the ServiciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
})
export class ServiciosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosPage');
  }


  modalSoluciones(){


    const mAcce=this.modal.create(ModalSolucionesPage);

    mAcce.present();
  }



  modalArqui(){


    const mAcce=this.modal.create(ModalArquitePage);

    mAcce.present();
  }

  modalCapa(){


    const mAcce=this.modal.create(ModalCapacitacionPage);

    mAcce.present();
  }

  modalProvision(){


    const mAcce=this.modal.create(ModalProvisionPage);

    mAcce.present();
  }

  modalAjustes(){


    const mAcce=this.modal.create(ModalAjustesPage);

    mAcce.present();
  }

  modalAccesibilidad(){


    const mAcce=this.modal.create(ModalAccesiblidadPage);

    mAcce.present();
  }

}
