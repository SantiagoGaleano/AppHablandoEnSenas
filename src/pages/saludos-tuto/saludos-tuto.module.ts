import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaludosTutoPage } from './saludos-tuto';

@NgModule({
  declarations: [
    SaludosTutoPage,
  ],
  imports: [
    IonicPageModule.forChild(SaludosTutoPage),
  ],
})
export class SaludosTutoPageModule {}
