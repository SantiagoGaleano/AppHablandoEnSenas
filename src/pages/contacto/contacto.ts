import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacto',
  templateUrl: 'contacto.html',
})
export class ContactoPage {

  myForm: FormGroup;
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,
    public database: AngularFireDatabase) {

    this.tasksRef = this.database.list('tasks');
    this.tasks = this.tasksRef.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    this.myForm = this.createMyForm();
  }

  saveData(){
    console.log(this.myForm.value);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }



  private createMyForm(){


    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mensaje:['',Validators.required]

    });
    }



    enviarFormulario(){
      this.tasksRef.push({
        nombre: this.myForm.value.name,
        apellido: this.myForm.value.lastName,
        correo:this.myForm.value.email,
        mensaje:this.myForm.value.mensaje
      });
    }

    }






