import { Component, OnInit } from '@angular/core';
import { AlertService } from '../shared/altert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pengguna',
  templateUrl: './pengguna.page.html',
  styleUrls: ['./pengguna.page.scss'],
  standalone: false,
})
export class PenggunaPage implements OnInit {

constructor(
  private alert: AlertService,
  private router: Router
) {}

logoutConfirm() {
  this.alert.confirmLogout(() => {
    console.log('User logged out');
    this.router.navigate(['/login']);
  });
}

  ngOnInit() {
  }

}
