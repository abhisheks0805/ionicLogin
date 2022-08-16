import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.page.html',
  styleUrls: ['./formpage.page.scss'],
})
export class FormpagePage implements OnInit {
  private category = [
    'Android Development',
    'Web Development',
    'Java Development',
  ];
  private arr: any[] = [];
  private obj = {
    name: '',
    fathersName: '',
    phone: '',
    domain: '',
    terms: false,
    specilization: '',
  };

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}
  onClickSubmit() {
    const obj = {
      name: this.obj.name,
      fathersName: this.obj.fathersName,
      phone: this.obj.phone,
      domain: this.obj.domain,
      terms: this.obj.terms,
      specilization: this.obj.specilization,
    };
    this.arr.push(obj);

    const dataToSend: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.arr),
      },
    };

    this.navCtrl.navigateForward(['previewpage'], dataToSend);
  }

  async presentAlert(message) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Terms accepted: ' + message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  getSpecilization(event) {
    this.obj.specilization = event.detail.value;
  }
}
