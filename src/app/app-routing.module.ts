import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'crearcuenta',
    loadChildren: () => import('./crearcuenta/crearcuenta.module').then( m => m.CrearCuentaPageModule)
  },
  {
    path: 'terminos',
    loadChildren: () => import('./terminos/terminos.module').then( m => m.TerminosPageModule)
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'soychofer',
    loadChildren: () => import('./soychofer/soychofer.module').then( m => m.SoychoferPageModule)
  },
  {
    path: 'chofer',
    loadChildren: () => import('./chofer/chofer.module').then( m => m.ChoferPageModule)
  },
  {
    path: 'soypasajero',
    loadChildren: () => import('./soypasajero/soypasajero.module').then( m => m.SoypasajeroPageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'viajes',
    loadChildren: () => import('./viajes/viajes.module').then( m => m.ViajesPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'editarinformacion',
    loadChildren: () => import('./editarinformacion/editarinformacion.module').then( m => m.EditarinformacionPageModule)
  },
  {
    path: 'infovehiculo',
    loadChildren: () => import('./infovehiculo/infovehiculo.module').then( m => m.InfovehiculoPageModule)
  },
  {
    path: 'partidachofer',
    loadChildren: () => import('./partidachofer/partidachofer.module').then( m => m.PartidachoferPageModule)
  },
  {
    path: 'configuratuviaje',
    loadChildren: () => import('./configuratuviaje/configuratuviaje.module').then( m => m.ConfiguratuviajePageModule)
  },
  {
    path: 'tarifa',
    loadChildren: () => import('./tarifa/tarifa.module').then( m => m.TarifaPageModule)
  },
  {
    path: 'viajepublicado',
    loadChildren: () => import('./viajepublicado/viajepublicado.module').then( m => m.ViajepublicadoPageModule)
  },
  {
    path: 'solicitudviaje',
    loadChildren: () => import('./solicitudviaje/solicitudviaje.module').then( m => m.SolicitudviajePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
