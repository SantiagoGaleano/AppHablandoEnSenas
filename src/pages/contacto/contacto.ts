import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import { MyValidators } from './../../validators/validators';



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
  formularioUsuario:FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,
    public database: AngularFireDatabase,private alertCtrl: AlertController,
    private fb: FormBuilder) {

    this.tasksRef = this.database.list('Informacion');
    this.tasks = this.tasksRef.snapshotChanges()
    .map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    this.buildForm();
  }

  saveData(){
    console.log(this.formularioUsuario.value);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactoPage');
  }





  buildForm() {
    /**
      * @description Asignamos a la propiedad "formularioUsuario" los campos que se van a controlar de la vista
      */
    this.formularioUsuario = this.fb.group({
      nombre:['',[Validators.required,Validators.maxLength(30)]],
      direccion:['',[Validators.required,Validators.minLength(5),Validators.maxLength(100)]],
      correo:['',[Validators.required,Validators.email]],
      tipo_contacto:['Telefono',[Validators.required]],
      numero_contacto:['',[Validators.required, MyValidators.checkPhoneSize]],
      mensaje:['',[Validators.required,Validators.maxLength(200)]],
    });

    this.formularioUsuario.get('tipo_contacto')
    .valueChanges
    .subscribe(value => {
      console.log(value);
      if (value === 'Telefono') {
        const validators = [Validators.required, MyValidators.checkPhoneSize];
        this.formularioUsuario.get('numero_contacto').setValidators(validators);
      }else {
        const validators = [Validators.required, MyValidators.checkCellPhoneSize];
        this.formularioUsuario.get('numero_contacto').setValidators(validators);
      }
      this.formularioUsuario.updateValueAndValidity();
    });
  }



    enviarFormulario(){

      this.tasksRef.push({

        nombre: this.formularioUsuario.value.nombre,
        direccion:this.formularioUsuario.value.direccion,

        telefono:this.formularioUsuario.value.numero_contacto,
        correo:this.formularioUsuario.value.correo,
        mensaje:this.formularioUsuario.value.mensaje
      });


    }

    presentAlert() {
      let alert = this.alertCtrl.create({
        title: 'Mensaje Enviado',
        subTitle: 'Pronto nos pondremos en contacto',
        buttons: ['Ok']
      });
      alert.present();
    }

    }






