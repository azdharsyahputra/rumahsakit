import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/altert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status-antrian',
  templateUrl: './status-antrian.page.html',
  styleUrls: ['./status-antrian.page.scss'],
  standalone: false,
})
export class StatusAntrianPage implements OnInit {

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
