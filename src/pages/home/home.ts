import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {VIDEOS} from  "../../data/datavideos";
import { Vibration } from '@ionic-native/vibration';

import { ScreenOrientation } from '@ionic-native/screen-orientation';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  videos: any[] = [];
  currentVideo: any;
  path: Set<number> = new Set();
  valor;
   contador;
   random;

  constructor(public navCtrl: NavController,private screenOrientation: ScreenOrientation,private vibration: Vibration) {
    // Video aleatorio para el inicio
    this.videos = VIDEOS;
    this.currentVideo = this.randomVideo();
    this.contador=0;

  }




//     this.vibration.vibration(1000);
// }
  ionViewDidEnter() {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);

  }





  randomVideo() {
    let random = Math.floor(Math.random() * VIDEOS.length);

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
      this.vibration.vibrate(1000);
      this.contador+=100/27;
      // console.log(this.contador," ",answer);
      return true;
    }

   return false;


  }







}
