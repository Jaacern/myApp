import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfovehiculoPage } from './infovehiculo.page';
import { InfovehiculoPageRoutingModule } from './infovehiculo-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InfovehiculoPageRoutingModule
  ],
  declarations: [InfovehiculoPage]
})
export class InfovehiculoPageModule {}
