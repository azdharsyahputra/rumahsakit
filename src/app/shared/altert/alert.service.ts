import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async confirmLogout(onConfirm: () => void) {
    const alert = await this.alertController.create({
      header: 'Konfirmasi Logout',
      message: 'Yakin ingin logout dari aplikasi?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          cssClass: 'alert-cancel-button',
        },
        {
          text: 'Logout',
          handler: () => {
            onConfirm(); // fungsi yang kamu isi di halaman masing-masing
          },
          cssClass: 'alert-logout-button',
        },
      ],
    });

    await alert.present();
  }
}
