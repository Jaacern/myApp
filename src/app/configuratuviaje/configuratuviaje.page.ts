import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importa NavController

@Component({
  selector: 'app-configuratuviaje',
  templateUrl: './configuratuviaje.page.html',
  styleUrls: ['./configuratuviaje.page.scss'],
})
export class ConfiguraTuViajePage {

  constructor(private navCtrl: NavController) {}  // Inyecta NavController

  // Función para navegar a la página de Tarifa
  onTarifa() {
    this.navCtrl.navigateForward('/tarifa');  // Navega a la página de Tarifa
  }
}
