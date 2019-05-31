
import { Component } from '@angular/core';
import { AboutPage } from '../about/about';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  alertCtrl: any;
  navCtrl: any;
 

  constructor() {}
  public clickon(){
    var x = 1 
     if(x==1){
return  window.open('https://www.facebook.com/vitrine.cdb');
             }
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
      this.navCtrl.push(AboutPage, {}, {animate: true} );    
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad ContactPage');
    }
  
 }
