import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusAntrianPageRoutingModule } from './status-antrian-routing.module';

import { StatusAntrianPage } from './status-antrian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatusAntrianPageRoutingModule
  ],
  declarations: [StatusAntrianPage]
})
export class StatusAntrianPageModule {}
