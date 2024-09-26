import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViajePublicadoPage } from './viajepublicado.page';
import { ViajepublicadoPageRoutingModule } from './viajepublicado-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ViajepublicadoPageRoutingModule
  ],
  declarations: [ViajePublicadoPage]
})
export class ViajepublicadoPageModule {}
