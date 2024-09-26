import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarinformacionPage } from './editarinformacion.page';

const routes: Routes = [
  {
    path: '',
    component: EditarinformacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarinformacionPageRoutingModule {}
