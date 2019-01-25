import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalProvisionPage } from './modal-provision';

@NgModule({
  declarations: [
    ModalProvisionPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalProvisionPage),
  ],
})
export class ModalProvisionPageModule {}
