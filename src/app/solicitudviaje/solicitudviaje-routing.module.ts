import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SolicitudviajePage } from './solicitudviaje.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudviajePageRoutingModule {}
