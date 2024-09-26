import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
})
export class BienvenidaPage {

  constructor(private navCtrl: NavController) { }

  // Navegar a la página "Soy Pasajero"
  navigateToSoyPasajero() {
    this.navCtrl.navigateForward('/soypasajero');
  }

  // Navegar a la página "Soy Conductor"
  navigateToSoyChofer() {
    this.navCtrl.navigateForward('/soychofer');
  }

}
