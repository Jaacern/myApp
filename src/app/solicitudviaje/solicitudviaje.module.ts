import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SolicitudviajePage } from './solicitudviaje.page';
import { SolicitudviajePageRoutingModule } from './solicitudviaje-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SolicitudviajePageRoutingModule
  ],
  declarations: [SolicitudviajePage]
})
export class SolicitudviajePageModule {}
