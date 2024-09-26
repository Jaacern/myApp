import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';  // Importa NavController

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private navCtrl: NavController) { }  // Inyecta NavController

  ngOnInit() {
  }

  onLogin() {
    this.navCtrl.navigateForward('/bienvenida');  // Navega a la página de bienvenida
  }

}
