import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VIDEOS} from  "../../data/datavideos";
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  videos: any[] = [];
  currentVideo: any;
  path: Set<number> = new Set();

  constructor(public navCtrl: NavController,private screenOrientation: ScreenOrientation) {
    // Video aleatorio para el inicio
    this.videos = VIDEOS;
    this.currentVideo = this.randomVideo();
  }

  ionViewDidEnter() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  }



  randomVideo() {
    let random = Math.round(Math.random() * VIDEOS.length);

    // Itera recursivamente hasta que obtiene un video que no ha sido mostrado previamente
    if (this.path.has(random)){
      return this.randomVideo();
    }
    this.path.add(random);
    return VIDEOS[random];
  }

  isAnswerCorrect(answer) {
    if(answer == this.currentVideo.respuesta) {
      // aquí pones el comportamiento si la respuesta es correcta
      this.currentVideo = this.randomVideo();
      return true;
    }
    return false;
  }





}
