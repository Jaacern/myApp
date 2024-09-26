import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TerminosPage } from './terminos.page';
import { TerminosPageRoutingModule } from './terminos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TerminosPageRoutingModule
  ],
  declarations: [TerminosPage]
})
export class TerminosPageModule {}
