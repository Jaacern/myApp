import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BienvenidaPage } from './bienvenida.page';
import { BienvenidaPageRoutingModule } from './bienvenida-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    BienvenidaPageRoutingModule
  ],
  declarations: [BienvenidaPage]
})
export class BienvenidaPageModule {}
