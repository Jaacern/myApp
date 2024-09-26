import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importa NavController

@Component({
  selector: 'app-viajepublicado',
  templateUrl: './viajepublicado.page.html',
  styleUrls: ['./viajepublicado.page.scss'],
})
export class ViajePublicadoPage {

  constructor(private navCtrl: NavController) {}  // Inyecta NavController

  // Función para navegar a la página de Viajes
  verViajesPublicados() {
    this.navCtrl.navigateForward('/viajes');  // Navega a la página de Viajes
  }
}
