import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfiguraTuViajePage } from './configuratuviaje.page';
import { ConfiguratuviajePageRoutingModule } from './configuratuviaje-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ConfiguratuviajePageRoutingModule
  ],
  declarations: [ConfiguraTuViajePage]
})
export class ConfiguratuviajePageModule {}
