import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViajesPage } from './viajes.page';
import { ViajesPageRoutingModule } from './viajes-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ViajesPageRoutingModule
  ],
  declarations: [ViajesPage]
})
export class ViajesPageModule {}
