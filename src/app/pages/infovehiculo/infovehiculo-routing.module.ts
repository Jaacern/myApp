import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfovehiculoPage } from './infovehiculo.page';

const routes: Routes = [
  {
    path: '',
    component: InfovehiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfovehiculoPageRoutingModule {}
