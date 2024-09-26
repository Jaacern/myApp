import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViajePublicadoPage } from './viajepublicado.page';

const routes: Routes = [
  {
    path: '',
    component: ViajePublicadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajepublicadoPageRoutingModule {}
