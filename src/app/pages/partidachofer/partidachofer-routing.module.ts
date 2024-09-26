import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartidachoferPage } from './partidachofer.page';

const routes: Routes = [
  {
    path: '',
    component: PartidachoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartidachoferPageRoutingModule {}
