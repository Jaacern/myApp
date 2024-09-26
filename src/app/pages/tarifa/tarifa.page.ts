import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importa NavController

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.page.html',
  styleUrls: ['./tarifa.page.scss'],
})
export class TarifaPage {

  constructor(private navCtrl: NavController) {}  // Inyecta NavController

  // Función para navegar a la página de Viaje Publicado
  publicarViaje() {
    this.navCtrl.navigateForward('/viajepublicado');  // Navega a la página Viaje Publicado
  }
}
