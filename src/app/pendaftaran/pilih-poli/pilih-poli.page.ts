import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/altert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pilih-poli',
  templateUrl: './pilih-poli.page.html',
  styleUrls: ['./pilih-poli.page.scss'],
  standalone: false,
})
export class PilihPoliPage implements OnInit {

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
