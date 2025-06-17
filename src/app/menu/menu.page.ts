import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/shared/altert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false,
})
export class MenuPage implements OnInit {
  showNotif: boolean = false; // untuk kontrol modal

  constructor(
    private alert: AlertService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cekStatusAntrian();
  }

  logoutConfirm() {
    this.alert.confirmLogout(() => {
      console.log('User logged out');
      this.router.navigate(['/login']);
    });
  }

  cekStatusAntrian() {
    // Logika pengecekan, bisa ganti dari API atau kondisi lain
    const sudahDipanggil = true; // ubah sesuai kondisi nyata

    if (sudahDipanggil) {
      this.showNotif = true;
    }
  }

  closeNotif() {
    this.showNotif = false;
  }
}
