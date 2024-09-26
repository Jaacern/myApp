import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./pages/bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'chofer',
    loadChildren: () => import('./pages/chofer/chofer.module').then( m => m.ChoferPageModule)
  },
  {
    path: 'configuratuviaje',
    loadChildren: () => import('./pages/configuratuviaje/configuratuviaje.module').then( m => m.ConfiguratuviajePageModule)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./pages/crearcuenta/crearcuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'editarinformacion',
    loadChildren: () => import('./pages/editarinformacion/editarinformacion.module').then( m => m.EditarinformacionPageModule)
  },
  {
    path: 'infovehiculo',
    loadChildren: () => import('./pages/infovehiculo/infovehiculo.module').then( m => m.InfovehiculoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./pages/mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'partidachofer',
    loadChildren: () => import('./pages/partidachofer/partidachofer.module').then( m => m.PartidachoferPageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pages/pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'solicitudviaje',
    loadChildren: () => import('./pages/solicitudviaje/solicitudviaje.module').then( m => m.SolicitudviajePageModule)
  },
  {
    path: 'soychofer',
    loadChildren: () => import('./pages/soychofer/soychofer.module').then( m => m.SoychoferPageModule)
  },
  {
    path: 'soypasajero',
    loadChildren: () => import('./pages/soypasajero/soypasajero.module').then( m => m.SoypasajeroPageModule)
  },
  {
    path: 'tarifa',
    loadChildren: () => import('./pages/tarifa/tarifa.module').then( m => m.TarifaPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./pages/terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'viajepublicado',
    loadChildren: () => import('./pages/viajepublicado/viajepublicado.module').then( m => m.ViajepublicadoPageModule)
  },
  {
    path: 'viajes',
    loadChildren: () => import('./pages/viajes/viajes.module').then( m => m.ViajesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
