import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private email = '';
  private password = '';

  private correctEmail = 'admin';
  private correctPass = 'admin';

  constructor(private alertController: AlertController,private navCtrl: NavController) {}

  onClickSubmit(){
    this.checkValidation();
  }

  checkValidation(){
    if(this.email===this.correctEmail && this.password === this.correctPass){
      this.navCtrl.navigateForward(['formpage']);
    }
    else if(this.email==='' || this.password===''){
      this.presentAlert("Please Enter Details")
    }
    else{
      console.log("incorrect details")
      this.presentAlert("Invalid Credentials");
    }
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: msg,
      buttons: ['Try Again'],
    });

    await alert.present();
  }
}

