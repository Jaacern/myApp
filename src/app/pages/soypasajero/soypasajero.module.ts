import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SoyPasajeroPage } from './soypasajero.page';
import { SoypasajeroPageRoutingModule } from './soypasajero-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SoypasajeroPageRoutingModule
  ],
  declarations: [SoyPasajeroPage]
})
export class SoypasajeroPageModule {}
