import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importa NavController

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage {

  constructor(private navCtrl: NavController) {}  // Inyecta NavController

  // Función para navegar a la página de inicio
  crearCuenta() {
    this.navCtrl.navigateForward('/inicio');  // Redirige a la página de inicio
  }

  // Función para navegar a la página de términos
  leerTerminos() {
    this.navCtrl.navigateForward('/terminos');  // Redirige a la página de términos
  }

}
