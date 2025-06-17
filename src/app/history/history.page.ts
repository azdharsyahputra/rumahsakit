import { Component, OnInit } from '@angular/core';
import { AlertService } from '../shared/altert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: false,
})
export class HistoryPage implements OnInit {

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
