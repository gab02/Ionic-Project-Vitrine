import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  alertCtrl: any;
  navCtrl: any;

  


  constructor() {
    
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'teste',
      buttons: ['OK']
    });
    alert.present();
  }

  open(){
    this.navCtrl.push(ContactPage, {}, {animate: true} );    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AbouttPage');
  }
  
 }
