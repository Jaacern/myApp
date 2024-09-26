import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PartidachoferPage } from './partidachofer.page';
import { PartidachoferPageRoutingModule } from './partidachofer-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PartidachoferPageRoutingModule
  ],
  declarations: [PartidachoferPage]
})
export class PartidachoferPageModule {}
