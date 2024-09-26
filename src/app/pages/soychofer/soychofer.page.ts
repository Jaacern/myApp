import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importa NavController

@Component({
  selector: 'app-soychofer',
  templateUrl: './soychofer.page.html',
  styleUrls: ['./soychofer.page.scss'],
})
export class SoyChoferPage {

  constructor(private navCtrl: NavController) {}  // Inyecta NavController

  // Función para navegar a la página de configurar viaje
  crearViaje() {
    this.navCtrl.navigateForward('/configuratuviaje');  // Redirige a la página de Configura tu Viaje
  }
}
