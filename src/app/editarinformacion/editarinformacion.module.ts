import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditarinformacionPage } from './editarinformacion.page';
import { EditarinformacionPageRoutingModule } from './editarinformacion-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EditarinformacionPageRoutingModule
  ],
  declarations: [EditarinformacionPage]
})
export class EditarinformacionPageModule {}
