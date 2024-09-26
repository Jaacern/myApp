import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrearcuentaPage } from './crearcuenta.page';
import { CrearCuentaPageRoutingModule } from './crearcuenta-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CrearCuentaPageRoutingModule
  ],
  declarations: [CrearcuentaPage]
})
export class CrearCuentaPageModule {}
