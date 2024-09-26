import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarifaPage } from './tarifa.page';
import { TarifaPageRoutingModule } from './tarifa-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TarifaPageRoutingModule
  ],
  declarations: [TarifaPage]
})
export class TarifaPageModule {}
