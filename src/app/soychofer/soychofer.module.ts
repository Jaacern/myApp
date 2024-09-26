import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SoyChoferPage } from './soychofer.page';
import { SoychoferPageRoutingModule } from './soychofer-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SoychoferPageRoutingModule
  ],
  declarations: [SoyChoferPage]
})
export class SoychoferPageModule {}
