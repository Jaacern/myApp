import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importa NavController

@Component({
  selector: 'app-soypasajero',
  templateUrl: './soypasajero.page.html',
  styleUrls: ['./soypasajero.page.scss'],
})
export class SoyPasajeroPage {

  constructor(private navCtrl: NavController) {}  // Inyecta NavController

  // Función para navegar a la página de solicitud de viaje
  buscarViaje() {
    this.navCtrl.navigateForward('/solicitudviaje');  // Redirige a la página de solicitud de viaje
  }

}
